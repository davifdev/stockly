import { CircleDollarSign } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";

const TotalSalesCard = () => {
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <CircleDollarSign />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Vendas totais</SummaryCardSubtitle>
      <SummaryCardTitle>1040</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TotalSalesCard;
