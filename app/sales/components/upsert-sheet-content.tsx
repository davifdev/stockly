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
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

import { Product } from "@/app/generated/prisma/client";
import { formatCurrency } from "@/app/helpers/formatCurrency";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, PlusIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import UpsertSaleTableDropdownMenu from "./upsert-table-dropdown-menu";
import { toast } from "sonner";
import { upsertSale } from "@/app/services/sales/upsert-sale";

interface SelectedProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface UpsertSheetContentProps {
  saleId?: string;
  productsOptions: ComboboxOption[];
  products: Product[];
  onSuccess: () => void;
  defaultSelectedProducts?: SelectedProduct[];
}

const upsertFormSchema = z.object({
  productId: z.uuid("O produto é obrigatório"),
  quantity: z.coerce.number<number>().positive(),
});

type UpsertFormSchema = z.infer<typeof upsertFormSchema>;

const UpsertSheetContent = ({
  saleId,
  productsOptions,
  products,
  onSuccess,
  defaultSelectedProducts,
}: UpsertSheetContentProps) => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    defaultSelectedProducts ?? [],
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

  const onSubmitSale = async () => {
    const products = selectedProducts.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }));

    await upsertSale({ id: saleId, products });
    toast.success("Venda realizada com sucesso");
    onSuccess();
  };

  const onDelete = (productId: string) => {
    setSelectedProducts((prev) => {
      return prev.filter((product) => product.id !== productId);
    });
    toast.success("Produto deletado com sucesso");
  };

  const productTotal = useMemo(() => {
    return selectedProducts.reduce((acc, product) => {
      return (acc += product.price * product.quantity);
    }, 0);
  }, [selectedProducts]);

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
                    options={productsOptions}
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
              <TableCell>
                <UpsertSaleTableDropdownMenu
                  onDelete={onDelete}
                  product={product}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell>{formatCurrency(productTotal)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <SheetFooter className="pt-4">
        <Button
          className="w-full"
          disabled={selectedProducts.length === 0}
          onClick={onSubmitSale}
        >
          <CheckIcon />
          Finalizar Venda
        </Button>
      </SheetFooter>
    </SheetContent>
  );
};

export default UpsertSheetContent;
