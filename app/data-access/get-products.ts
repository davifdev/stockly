import "server-only";

import { db } from "../lib/prisma";
import { Product } from "../generated/prisma/client";
import { unstable_cache } from "next/cache";

export type ProductStatus = "IN_STOCK" | "OUT_OF_STOCK";
export interface ProductDto extends Product {
  status: ProductStatus;
}

export const getProduct = async () => {
  const products = await db.product.findMany({});
  return products.map((product) => ({
    ...product,
    status: product.stock > 0 ? "IN_STOCK" : "OUT_OF_STOCK",
  }));
};

export const getCachedProducts = unstable_cache(
  getProduct,
  ["my-app-products"],
  { revalidate: 10 },
);
