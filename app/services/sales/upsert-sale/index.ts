"use server";

import { db } from "@/app/lib/prisma";
import { actionClient } from "@/app/lib/safe-action";
import { upsertSaleSchemma } from "@/app/validators/upsert-sale-validator";
import { returnValidationErrors } from "next-safe-action";
import { revalidatePath } from "next/cache";

export const upsertSale = actionClient
  .inputSchema(upsertSaleSchemma)
  .action(async ({ parsedInput: { products, id } }) => {
    const isUpdate = Boolean(id);
    await db.$transaction(async (trx) => {
      if (isUpdate) {
        const existingSale = await trx.sale.findUnique({
          where: { id },
          include: { saleProducts: true },
        });

        if (!existingSale) return;

        await trx.sale.delete({
          where: { id },
        });

        for (const product of existingSale.saleProducts) {
          await trx.product.update({
            where: { id: product.productId },
            data: {
              stock: {
                increment: product.quantity,
              },
            },
          });
        }
      }

      const sale = await trx.sale.create({
        data: {
          date: new Date(),
        },
      });

      for (const product of products) {
        const productFromDb = await trx.product.findUnique({
          where: {
            id: product.id,
          },
        });

        if (!productFromDb) {
          returnValidationErrors(upsertSaleSchemma, {
            _errors: ["Product not found"],
          });
        }

        const productIsOutOfStock = product.quantity > productFromDb.stock;
        if (productIsOutOfStock) {
          returnValidationErrors(upsertSaleSchemma, {
            _errors: ["Product out of stock"],
          });
        }
        await trx.saleProduct.create({
          data: {
            saleId: sale.id,
            productId: product.id,
            quantity: product.quantity,
            unitPrice: productFromDb.price,
          },
        });
        await trx.product.update({
          where: {
            id: product.id,
          },
          data: {
            stock: {
              decrement: product.quantity,
            },
          },
        });
      }
    });

    revalidatePath("/");
    revalidatePath("/sales");
    revalidatePath("/products");
  });
