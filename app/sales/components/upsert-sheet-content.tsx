"use client";

import { Button } from "@/app/components/ui/button";
import { Combobox, ComboboxOption } from "@/app/components/ui/combobox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

import { Product } from "@/app/generated/prisma/client";
import { formatCurrency } from "@/app/helpers/formatCurrency";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface SelectedProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface UpsertSheetContentProps {
  productOptions: ComboboxOption[];
  products: Product[];
  onSuccess?: () => void;
}

const upsertFormSchema = z.object({
  productId: z.uuid("O produto é obrigatório"),
  quantity: z.coerce.number<number>().positive(),
});

type UpsertFormSchema = z.infer<typeof upsertFormSchema>;

const UpsertSheetContent = ({
  productOptions,
  products,
}: UpsertSheetContentProps) => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    [],
  );
  const form = useForm<UpsertFormSchema>({
    resolver: zodResolver(upsertFormSchema),
    defaultValues: {
      productId: "",
      quantity: 1,
    },
  });

  const onSubmit = (data: UpsertFormSchema) => {
    const selectedProduct = products.find(
      (product) => product.id === data.productId,
    );
    if (!selectedProduct) return;
    setSelectedProducts((prev) => {
      return [
        ...prev,
        {
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: Number(selectedProduct.price),
          quantity: data.quantity,
        },
      ];
    });
  };

  return (
    <SheetContent className="w-full !max-w-2xl">
      <SheetHeader>
        <SheetTitle>Adicionar Venda</SheetTitle>
        <SheetDescription>
          Insira as informações de venda abaixo
        </SheetDescription>
      </SheetHeader>
      <Form {...form}>
        <form className="space-y-4 py-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione um produto"
                    {...field}
                    options={productOptions}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    placeholder="Digite a quantidade"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="secondary" type="submit" className="w-full">
            <PlusIcon size={20} />
            Adicionar produto á venda
          </Button>
        </form>
      </Form>
      <Table>
        <TableCaption>Lista dos produtos adicionados á venda</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Preço unitário</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{formatCurrency(product.price)}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                {formatCurrency(product.price * product.quantity)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SheetContent>
  );
};

export default UpsertSheetContent;
