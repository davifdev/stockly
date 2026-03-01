import { DollarSignIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";
import { formatCurrency } from "@/app/helpers/formatCurrency";
import { getTotalRevenue } from "@/app/data-access/dashboard/get-total-revenue";

const TotalRevenueCard = async () => {
  const totalRevenue = await getTotalRevenue();
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
