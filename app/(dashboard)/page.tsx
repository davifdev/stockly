import {
  HeaderContainer,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../components/header";
import MostSoldProductsCard from "./components/most-sold-products-card";

import TodayRevenueCard from "./components/today-revenue-card";
import { TotalLastDay14DaysCard } from "./components/total-lastday14days-card";
import TotalProductsCard from "./components/total-products-card";
import TotalRevenueCard from "./components/total-revenue-card";
import TotalSalesCard from "./components/total-sales-card";
import TotalStockCard from "./components/total-stock-card";

export default async function Home() {
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
      <div className="grid min-h-0 h-full grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <TotalLastDay14DaysCard />
        <MostSoldProductsCard />
      </div>
    </div>
  );
}
