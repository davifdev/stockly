import { db } from "@/app/lib/prisma";
import dayjs from "dayjs";

export interface DayTotalRevenueDto {
  day: string;
  totalRevenue: number;
}

export const getLastDays = async (): Promise<DayTotalRevenueDto[]> => {
  const today = dayjs().endOf("day").toDate();
  const last14Days = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(
    (day) => {
      return dayjs(today).subtract(day, "day");
    },
  );
  const totalLast14DaysRevenues: DayTotalRevenueDto[] = [];
  for (const day of last14Days) {
    const dayTotalRevenueQuery = `SELECT SUM("SaleProduct"."unitPrice" * "SaleProduct"."quantity") as "totalRevenue" FROM "SaleProduct" JOIN "Sale" ON "SaleProduct"."saleId" = "Sale"."id" WHERE "Sale"."date" >= $1 AND "Sale"."date" <= $2`;

    const startOfDay = day.startOf("day").toDate();
    const endOfDay = day.endOf("day").toDate();

    const dayTotalRevenue = await db.$queryRawUnsafe<
      { totalRevenue: number }[]
    >(dayTotalRevenueQuery, startOfDay, endOfDay);

    totalLast14DaysRevenues.push({
      day: day.format("DD/MM"),
      totalRevenue: dayTotalRevenue[0].totalRevenue,
    });
  }

  return totalLast14DaysRevenues;
};
