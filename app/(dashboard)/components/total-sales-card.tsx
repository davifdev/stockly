import { CircleDollarSign } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";

interface TotalSalesCardProps {
  totalSales: number;
}

const TotalSalesCard = ({ totalSales }: TotalSalesCardProps) => {
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <CircleDollarSign />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Vendas totais</SummaryCardSubtitle>
      <SummaryCardTitle>{totalSales}</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TotalSalesCard;
