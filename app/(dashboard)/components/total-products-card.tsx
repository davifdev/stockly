import { ShoppingBasketIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";

interface TotalProductsCardProps {
  totalProducts: number;
}

const TotalProductsCard = ({ totalProducts }: TotalProductsCardProps) => {
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
