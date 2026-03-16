"use server";

import { db } from "@/app/lib/prisma";
import { actionClient } from "@/app/lib/safe-action";
import { upsertProductFormSchema } from "@/app/validators/upsert-product-validator";
import { returnValidationErrors } from "next-safe-action";
import { revalidatePath } from "next/cache";

export const upsertProduct = actionClient
  .inputSchema(upsertProductFormSchema)
  .action(async ({ parsedInput: data }) => {
    if (!data) {
      returnValidationErrors(upsertProductFormSchema, {
        _errors: ["Dados dos produtos inválidos"],
      });
    }

    await db.product.upsert({
      where: { id: data.id ?? "" },
      update: data,
      create: data,
    });

    revalidatePath("/products");
  });
