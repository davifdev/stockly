import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  ClipboardCopyIcon,
  EllipsisIcon,
  SquarePenIcon,
  TrashIcon,
} from "lucide-react";
import DeleteDialogContent from "./delete-dialog-content";
import { Dialog, DialogTrigger } from "@/app/components/ui/dialog";
import UpsertDialogContent from "./upsert-dialog-content";
import { useState } from "react";
import { Product } from "@/app/generated/prisma/client";
interface TableDropdownMenuProps {
  product: Product;
}

const TableDropdownMenu = ({ product }: TableDropdownMenuProps) => {
  const [editIsOpen, setEditIsOpen] = useState(false);

  return (
    <AlertDialog>
      <Dialog open={editIsOpen} onOpenChange={setEditIsOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <EllipsisIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              <ClipboardCopyIcon />
              Copiar ID
            </DropdownMenuItem>
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <SquarePenIcon />
                Editar
              </DropdownMenuItem>
            </DialogTrigger>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem>
                <TrashIcon />
                Excluir
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <UpsertDialogContent
          dialogClose={() => setEditIsOpen(false)}
          defaultValues={{
            id: product.id,
            name: product.name,
            price: Number(product.price),
            stock: product.stock,
          }}
        />
        <DeleteDialogContent productId={product.id} />
      </Dialog>
    </AlertDialog>
  );
};

export default TableDropdownMenu;
