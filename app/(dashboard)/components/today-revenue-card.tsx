import { DollarSignIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";
import { formatCurrency } from "@/app/helpers/formatCurrency";
import { getTodayRevenue } from "@/app/data-access/dashboard/get-today-revenue";

const TodayRevenueCard = async () => {
  const todayRevenue = await getTodayRevenue();
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
