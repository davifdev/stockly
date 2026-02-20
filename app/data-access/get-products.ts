import "server-only";
import { db } from "../lib/prisma";

export const getProduct = async () => {
  return await db.product.findMany({});
};
