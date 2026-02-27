"use client";

import { SalesDto } from "@/app/data-access/get-sale";
import { ColumnDef } from "@tanstack/react-table";
import SaleTableDropdownMenu from "./table-dropdown-menu";
import { ProductDto } from "@/app/data-access/get-products";
import { ComboboxOption } from "@/app/components/ui/combobox";
import { formatCurrency } from "@/app/helpers/formatCurrency";
interface SalesTableColumn extends SalesDto {
  products: ProductDto[];
  productsOptions: ComboboxOption[];
}

export const columns: ColumnDef<SalesTableColumn>[] = [
  {
    accessorKey: "productNames",
    header: "Produtos",
  },
  {
    accessorKey: "totalProducts",
    header: "Quantidade",
  },
  {
    accessorKey: "totalAmount",
    header: "Valor total",
    cell: ({
      row: {
        original: { totalAmount },
      },
    }) => formatCurrency(totalAmount),
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({
      row: {
        original: { date },
      },
    }) => new Date(date).toLocaleDateString("pt-br"),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: sale } }) => (
      <SaleTableDropdownMenu
        sale={sale}
        productsOptions={sale.productsOptions}
        products={sale.products}
      />
    ),
  },
];
