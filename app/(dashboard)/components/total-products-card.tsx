import { ShoppingBasketIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";
import { getTotalProducts } from "@/app/data-access/dashboard/get-total-products";

const TotalProductsCard = async () => {
  const totalProducts = await getTotalProducts();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <ShoppingBasketIcon />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Produtos</SummaryCardSubtitle>
      <SummaryCardTitle>{totalProducts}</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TotalProductsCard;
