import {
  HeaderContainer,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../components/header";
import { getDashboard } from "../data-access/get-dashboard";
import RevenueChart from "./components/revenue-chart";
import TodayRevenueCard from "./components/today-revenue-card";
import TotalProductsCard from "./components/total-products-card";
import TotalRevenueCard from "./components/total-revenue-card";
import TotalSalesCard from "./components/total-sales-card";
import TotalStockCard from "./components/total-stock-card";

export default async function Home() {
  const {
    todayRevenue,
    totalProducts,
    totalRevenue,
    totalSales,
    totalStock,
    totalLast14DaysRevenues,
  } = await getDashboard();
  return (
    <div className="p-8 w-full space-y-6 flex flex-col">
      <HeaderContainer>
        <HeaderLeft>
          <HeaderSubtitle>Visão Geral</HeaderSubtitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </HeaderContainer>
      <div className="grid grid-cols-2 gap-6">
        <TotalRevenueCard totalRevenue={totalRevenue} />
        <TodayRevenueCard todayRevenue={todayRevenue} />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <TotalSalesCard totalSales={totalSales} />
        <TotalStockCard totalStock={totalStock} />
        <TotalProductsCard totalProducts={totalProducts} />
      </div>
      <div className="grid min-h-0 h-full grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <div className="flex flex-col overflow-hidden rounded-xl bg-white p-6 space-y-6">
          <div>
            <p className="text-lg font-semibold text-slate-900">
              Receita total
            </p>
            <p className="text-sm text-slate-400">Últimos 14 dias</p>
          </div>
          <RevenueChart data={totalLast14DaysRevenues} />
        </div>
        <div className="flex flex-col h-full bg-white overflow-hidden p-6 rounded-xl">
          <p>Contéudo</p>
        </div>
      </div>
    </div>
  );
}
