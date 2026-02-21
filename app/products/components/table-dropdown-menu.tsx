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
interface TableDropdownMenuProps {
  productId: string;
}

const TableDropdownMenu = ({ productId }: TableDropdownMenuProps) => {
  const [editIsOpen, setEditIsOpen] = useState(false);

  return (
    <Dialog open={editIsOpen} onOpenChange={setEditIsOpen}>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <EllipsisIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(productId)}
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
        <DeleteDialogContent />
      </AlertDialog>
      <UpsertDialogContent dialogClose={() => setEditIsOpen(false)} />
    </Dialog>
  );
};

export default TableDropdownMenu;
