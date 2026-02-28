import { PackageIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";

const TotalStockCard = () => {
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <PackageIcon />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Total em estoque</SummaryCardSubtitle>
      <SummaryCardTitle>20.000</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TotalStockCard;
