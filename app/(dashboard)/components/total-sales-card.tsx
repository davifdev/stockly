import { CircleDollarSign } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";
import { getTotalSales } from "@/app/data-access/dashboard/get-total-sales";

const TotalSalesCard = async () => {
  const totalSales = await getTotalSales();
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
