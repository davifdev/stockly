"use server";

import { db } from "@/app/lib/prisma";
import {
  upsertProductFormSchema,
  UpsertProductFormSchema,
} from "@/app/validators/upsert-product-validator";
import { revalidatePath } from "next/cache";

export const upsertProduct = async (data: UpsertProductFormSchema) => {
  const parsedData = upsertProductFormSchema.safeParse(data);

  if (!parsedData) {
    throw new Error("Dados inválidos");
  }

  await db.product.upsert({
    where: { id: data.id ?? "" },
    update: data,
    create: data,
  });

  revalidatePath("/products");
};
