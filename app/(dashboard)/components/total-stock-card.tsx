import { PackageIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";

interface TotalStockCardProps {
  totalStock: number;
}

const TotalStockCard = ({ totalStock }: TotalStockCardProps) => {
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <PackageIcon />
      </SummaryCardIcon>
      <SummaryCardSubtitle>Total em estoque</SummaryCardSubtitle>
      <SummaryCardTitle>{totalStock}</SummaryCardTitle>
    </SummaryCard>
  );
};

export default TotalStockCard;
