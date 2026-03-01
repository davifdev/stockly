import { Suspense } from "react";
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
import { SummaryCardSkeleton } from "./components/summary-card";
import { Skeleton } from "../components/ui/skeleton";

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
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TodayRevenueCard />
        </Suspense>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalSalesCard />
        </Suspense>
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalStockCard />
        </Suspense>
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalProductsCard />
        </Suspense>
      </div>
      <div className="grid min-h-0 h-full grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <Suspense
          fallback={
            <Skeleton className="bg-white p-6">
              <div className="space-y-2">
                <div className="h-5 w-[82.26px] bg-gray-200 rounded-md" />
                <div className="h-4 w-48 bg-gray-200 rounded-md" />
              </div>
            </Skeleton>
          }
        >
          <TotalLastDay14DaysCard />
        </Suspense>
        <Suspense fallback={<SummaryCardSkeleton />}>
          <MostSoldProductsCard />
        </Suspense>
      </div>
    </div>
  );
}
