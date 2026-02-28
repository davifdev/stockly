import { DollarSignIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";

const TodayRevenueCard = () => {
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <DollarSignIcon />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Receita hoje</SummaryCardSubtitle>
      <SummaryCardTitle>R$ 231,89</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TodayRevenueCard;
