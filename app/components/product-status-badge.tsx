import { CircleIcon } from "lucide-react";
import { ProductStatus } from "../data-access/get-products";
import { Badge } from "./ui/badge";

interface ProductStatusBadgeProps {
  status: ProductStatus;
}

const getStatusLabel = (label: string) => {
  if (label === "IN_STOCK") {
    return "Em estoque";
  } else {
    return "Esgotado";
  }
};

const ProductStatusBadge = ({ status }: ProductStatusBadgeProps) => {
  const label = getStatusLabel(status);
  return (
    <Badge
      className={`${
        label === "Em estoque"
          ? "bg-green-50 text-green-500 hover:bg-green-100"
          : " bg-[#64748b11] text-slate-500 hover:bg-[#64748b20]"
      }`}
    >
      <CircleIcon
        className={`mr-1 ${
          label === "Em estoque" ? "fill-green-500" : "fill-slate-500"
        }`}
        size={8}
      />
      {label}
    </Badge>
  );
};

export default ProductStatusBadge;
