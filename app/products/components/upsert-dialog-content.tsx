"use client";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/components/ui/input";
import { NumericFormat } from "react-number-format";
import { Button } from "@/app/components/ui/button";
import {
  upsertProductFormSchema,
  UpsertProductFormSchema,
} from "@/app/validators/upsert-product-validator";
import { upsertProduct } from "@/app/services/products/upsert-product";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import { flattenValidationErrors } from "next-safe-action";
interface UpsertDialogContentProps {
  dialogClose: () => void;
  defaultValues?: UpsertProductFormSchema;
}

const UpsertDialogContent = ({
  dialogClose,
  defaultValues,
}: UpsertDialogContentProps) => {
  const form = useForm<UpsertProductFormSchema>({
    resolver: zodResolver(upsertProductFormSchema),
    shouldUnregister: true,
    defaultValues: defaultValues ?? {
      name: "",
      price: 0,
      stock: 0,
    },
  });

  const isEditing = !!defaultValues;

  const { execute: executeUpsertProduct } = useAction(upsertProduct, {
    onError: ({ error: { validationErrors, serverError } }) => {
      const flattendErrors = flattenValidationErrors(validationErrors);
      toast.error(serverError ?? flattendErrors.formErrors[0]);
    },
    onSuccess: () => {
      {
        isEditing
          ? toast.success("Produto editado com sucesso")
          : toast.success("Produto criado com sucesso");
      }
      dialogClose();
    },
  });

  const onSubmit = async (data: UpsertProductFormSchema) => {
    executeUpsertProduct({ ...data, id: defaultValues?.id });
  };

  return (
    <DialogContent>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Editar Produto" : "Cadastrar Produto"}
            </DialogTitle>
            <DialogDescription>Insira as informações abaixo</DialogDescription>
          </DialogHeader>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <NumericFormat
                    thousandSeparator="."
                    decimalSeparator=","
                    fixedDecimalScale
                    decimalScale={2}
                    prefix="R$ "
                    allowNegative={false}
                    customInput={Input}
                    onValueChange={(values) =>
                      field.onChange(values.floatValue)
                    }
                    {...field}
                    onChange={() => {}}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estoque</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">
              {isEditing ? "Editar Produto " : "Criar Produto"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default UpsertDialogContent;
