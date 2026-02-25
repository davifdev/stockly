"use server";

import { db } from "@/app/lib/prisma";
import {
  deleteProductSchema,
  DeleteProductSchema,
} from "@/app/validators/delete-product-validator";
import { revalidatePath } from "next/cache";

export const deleteProduct = async ({ productId }: DeleteProductSchema) => {
  deleteProductSchema.safeParse(productId);

  await db.product.delete({
    where: {
      id: productId,
    },
  });

  revalidatePath("/products");
};
