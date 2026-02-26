"use client";

import { Button } from "@/app/components/ui/button";
import { SalesDto } from "@/app/data-access/get-sale";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisIcon } from "lucide-react";

export const columns: ColumnDef<SalesDto>[] = [
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
    cell: () => (
      <Button variant="ghost">
        <EllipsisIcon />
      </Button>
    ),
  },
];
