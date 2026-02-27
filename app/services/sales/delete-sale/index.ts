"use server";

import { db } from "@/app/lib/prisma";
import { DeleteSaleSchema } from "@/app/validators/delete-sale-validator";
import { revalidatePath } from "next/cache";

export const deleteSale = async ({ id }: DeleteSaleSchema) => {
  const sale = await db.sale.findUnique({
    where: {
      id,
    },
    include: {
      saleProducts: true,
    },
  });

  await db.sale.delete({
    where: {
      id,
    },
  });
  if (!sale) return;
  for (const product of sale.saleProducts) {
    await db.product.update({
      where: {
        id: product.productId,
      },
      data: {
        stock: {
          increment: product.quantity,
        },
      },
    });
  }

  revalidatePath("/sales");
};
