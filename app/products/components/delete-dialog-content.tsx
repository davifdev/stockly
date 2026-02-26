import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";
import { deleteProduct } from "@/app/services/products/delete-product";
import { toast } from "sonner";
interface DeleteDialogContetProps {
  productId: string;
}

const DeleteDialogContent = ({ productId }: DeleteDialogContetProps) => {
  const handleContinueClick = async () => {
    await deleteProduct({ productId });
    toast.success("Produto deletado com sucesso");
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          Esta ação não pode ser desfeita. Isso excluirá permanentemente o
          produto do nosso sistema.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={handleContinueClick}>
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteDialogContent;
