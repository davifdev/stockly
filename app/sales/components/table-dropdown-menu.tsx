"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Sheet, SheetTrigger } from "@/app/components/ui/sheet";

import {
  ClipboardCopyIcon,
  EditIcon,
  MoreHorizontalIcon,
  TrashIcon,
} from "lucide-react";

import { toast } from "sonner";
import UpsertSheetContent from "./upsert-sheet-content";
import { useState } from "react";

import { ComboboxOption } from "@/app/components/ui/combobox";
import { SalesDto } from "@/app/data-access/get-sale";
import { ProductDto } from "@/app/data-access/get-products";

interface SalesTableDropdownMenuProps {
  sale: Pick<SalesDto, "id" | "saleProducts">;
  productsOptions: ComboboxOption[];
  products: ProductDto[];
}

export default function SaleTableDropdownMenu({
  sale,
  productsOptions,
  products,
}: SalesTableDropdownMenuProps) {
  const [upsertSheetIsOpen, setUpsertSheetIsOpen] = useState(false);

  return (
    <Sheet open={upsertSheetIsOpen} onOpenChange={setUpsertSheetIsOpen}>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(sale.id);
                toast.success("ID do produto copiado!");
              }}
            >
              <ClipboardCopyIcon />
              Copiar ID
            </DropdownMenuItem>
            <SheetTrigger asChild>
              <DropdownMenuItem>
                <EditIcon />
                Editar
              </DropdownMenuItem>
            </SheetTrigger>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem>
                <TrashIcon />
                Excluir
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Você está preste a excluir esta venda. Essa ação não pode ser
              desfeita. Deseja continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="destructive" onClick={() => {}}>
                Continuar
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <UpsertSheetContent
        saleId={sale.id}
        productOptions={productsOptions}
        products={products}
        onSuccess={() => setUpsertSheetIsOpen(false)}
        defaultSelectedProducts={sale.saleProducts.map((saleProduct) => ({
          id: saleProduct.productId,
          quantity: saleProduct.quantity,
          name: saleProduct.productName,
          price: Number(saleProduct.unitPrice),
        }))}
      />
    </Sheet>
  );
}
