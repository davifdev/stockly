"use server";

import { db } from "@/app/lib/prisma";
import { actionClient } from "@/app/lib/safe-action";
import { deleteProductSchema } from "@/app/validators/delete-product-validator";
import { returnValidationErrors } from "next-safe-action";
import { revalidatePath } from "next/cache";

actionClient
  .inputSchema(deleteProductSchema)
  .action(async ({ parsedInput: { productId } }) => {
    if (!productId) {
      returnValidationErrors(deleteProductSchema, {
        _errors: ["ID do produto não encontrado"],
      });
    }
    await db.product.delete({
      where: {
        id: productId,
      },
    });

    revalidatePath("/products");
  });
