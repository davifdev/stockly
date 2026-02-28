import { DollarSignIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";
import { formatCurrency } from "@/app/helpers/formatCurrency";
interface TodayRevenueCardProps {
  todayRevenue: number;
}

const TodayRevenueCard = ({ todayRevenue }: TodayRevenueCardProps) => {
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <DollarSignIcon />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Receita hoje</SummaryCardSubtitle>
      <SummaryCardTitle>{formatCurrency(todayRevenue)}</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TodayRevenueCard;
