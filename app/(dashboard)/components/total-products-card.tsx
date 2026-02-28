import { ShoppingBasketIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";

const TotalProductsCard = () => {
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <ShoppingBasketIcon />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Produtos</SummaryCardSubtitle>
      <SummaryCardTitle>60</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TotalProductsCard;
