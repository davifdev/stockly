"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/components/ui/chart";
import { DayTotalRevenueDto } from "@/app/data-access/dashboard/get-lastday14days";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  totalRevenue: {
    label: "Receita",
    color: "#00a383",
  },
} satisfies ChartConfig;

interface RevenueChartProps {
  data: DayTotalRevenueDto[];
}

const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-0 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="totalRevenue"
          radius={4}
          fill="var(--color-totalRevenue)"
        />
      </BarChart>
    </ChartContainer>
  );
};

export default RevenueChart;
