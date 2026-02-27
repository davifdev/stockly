"use client";

import { Button } from "@/app/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Product } from "@/app/generated/prisma/client";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ClipboardCopyIcon, MoreHorizontalIcon, TrashIcon } from "lucide-react";
import { toast } from "sonner";

interface UpsertSaleTableDropdownMenuProps {
  product: Pick<Product, "id">;
  onDelete: (productId: string) => void;
}

const UpsertSaleTableDropdownMenu = ({
  product,
  onDelete,
}: UpsertSaleTableDropdownMenuProps) => {
  return (
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
            navigator.clipboard.writeText(product.id);
            toast.success("ID do produto copiado!");
          }}
        >
          <ClipboardCopyIcon />
          Copiar ID
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onDelete(product.id)}>
          <TrashIcon />
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UpsertSaleTableDropdownMenu;
