import { DollarSignIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";
import { formatCurrency } from "@/app/helpers/formatCurrency";

interface TotalRevenueCardProps {
  totalRevenue: number;
}

const TotalRevenueCard = ({ totalRevenue }: TotalRevenueCardProps) => {
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <DollarSignIcon />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Receita total</SummaryCardSubtitle>
      <SummaryCardTitle>{formatCurrency(totalRevenue)}</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TotalRevenueCard;
