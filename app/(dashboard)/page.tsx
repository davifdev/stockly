import {
  HeaderContainer,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../components/header";
import TodayRevenueCard from "./components/today-revenue-card";
import TotalProductsCard from "./components/total-products-card";
import TotalRevenueCard from "./components/total-revenue-card";
import TotalSalesCard from "./components/total-sales-card";
import TotalStockCard from "./components/total-stock-card";

export default function Home() {
  return (
    <div className="p-8 w-full space-y-6 flex flex-col">
      <HeaderContainer>
        <HeaderLeft>
          <HeaderSubtitle>Visão Geral</HeaderSubtitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </HeaderContainer>
      <div className="grid grid-cols-2 gap-6">
        <TotalRevenueCard />
        <TodayRevenueCard />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <TotalSalesCard />
        <TotalStockCard />
        <TotalProductsCard />
      </div>
    </div>
  );
}
