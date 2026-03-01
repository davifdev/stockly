import { PackageIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardSubtitle,
  SummaryCardTitle,
} from "./summary-card";
import { getTotalStock } from "@/app/data-access/dashboard/get-total-stock";

const TotalStockCard = async () => {
  const totalStock = await getTotalStock();
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
