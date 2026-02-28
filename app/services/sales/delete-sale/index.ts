"use server";

import { db } from "@/app/lib/prisma";
import { DeleteSaleSchema } from "@/app/validators/delete-sale-validator";
import { revalidatePath } from "next/cache";

export const deleteSale = async ({ id }: DeleteSaleSchema) => {
  await db.$transaction(async (trx) => {
    const sale = await trx.sale.findUnique({
      where: {
        id,
      },
      include: {
        saleProducts: true,
      },
    });

    await trx.sale.delete({
      where: {
        id,
      },
    });
    if (!sale) return;
    for (const product of sale.saleProducts) {
      await trx.product.update({
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
  });

  revalidatePath("/sales");
  revalidatePath("/products");
};
