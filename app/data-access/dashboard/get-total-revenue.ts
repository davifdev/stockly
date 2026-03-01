import { db } from "@/app/lib/prisma";
import "server-only";

export const getTotalRevenue = async (): Promise<number> => {
  const totalRevenueQuery = `SELECT SUM("SaleProduct"."unitPrice" * "SaleProduct"."quantity") as "totalRevenue" FROM "SaleProduct" JOIN "Sale" ON "SaleProduct"."saleId" = "Sale"."id"`;
  const totalRevenue =
    await db.$queryRawUnsafe<{ totalRevenue: number }[]>(totalRevenueQuery);
  return totalRevenue[0].totalRevenue;
};
