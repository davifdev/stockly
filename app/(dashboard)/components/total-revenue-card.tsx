import { DollarSignIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";

const TotalRevenueCard = () => {
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <DollarSignIcon />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Receita total</SummaryCardSubtitle>
      <SummaryCardTitle>R$ 45.231,89</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TotalRevenueCard;
