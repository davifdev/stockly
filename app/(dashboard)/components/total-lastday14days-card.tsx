import RevenueChart from "./revenue-chart";
import { getLastDays } from "@/app/data-access/dashboard/get-lastday14days";

export const TotalLastDay14DaysCard = async () => {
  const totalLast14DaysRevenues = await getLastDays();
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white p-6 space-y-6">
      <div>
        <p className="text-lg font-semibold text-slate-900">Receita total</p>
        <p className="text-sm text-slate-400">Últimos 14 dias</p>
      </div>
      <RevenueChart data={totalLast14DaysRevenues} />
    </div>
  );
};
