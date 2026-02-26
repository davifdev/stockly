"use client";

import { SalesDto } from "@/app/data-access/get-sale";
import { ColumnDef } from "@tanstack/react-table";
import SaleTableDropdownMenu from "./table-dropdown-menu";
import { ProductDto } from "@/app/data-access/get-products";
import { ComboboxOption } from "@/app/components/ui/combobox";
interface SalesTableColumn extends SalesDto {
  products: ProductDto[];
  productOption: ComboboxOption[];
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
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: sale } }) => (
      <SaleTableDropdownMenu
        sale={sale}
        productsOptions={sale.productOption}
        products={sale.products}
      />
    ),
  },
];
