"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ProductDto } from "@/app/data-access/get-products";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon, EllipsisIcon } from "lucide-react";

const getStatusLabel = (label: string) => {
  if (label) {
    return "Em estoque";
  } else {
    return "Esgotado";
  }
};

export const columns: ColumnDef<ProductDto>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row: { original: product } }) => {
      const label = getStatusLabel(product.status);
      const inStock = label === "Em estoque";
      return (
        <Badge
          className={`${inStock ? "bg-green-50 text-green-500 hover:bg-green-100" : "bg-[#64748b11] text-slate-500 hover:bg-[#64748b20]"}`}
        >
          <CircleIcon
            size={8}
            className={`mr-1 ${inStock ? "fill-green-500" : "fill-slate-500"}`}
          />
          {getStatusLabel(product.status)}
        </Badge>
      );
    },
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
