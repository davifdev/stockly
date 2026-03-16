"use server";

import { db } from "@/app/lib/prisma";
import { deleteSaleSchema } from "@/app/validators/delete-sale-validator";
import { revalidatePath } from "next/cache";

import { actionClient } from "@/app/lib/safe-action";

export const deleteSale = actionClient
  .inputSchema(deleteSaleSchema)
  .action(async ({ parsedInput: { id } }) => {
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
  });
