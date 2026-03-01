import { db } from "@/app/lib/prisma";

export const getTotalSales = async (): Promise<number> => {
  const totalSales = await db.sale.count();
  return totalSales;
};
