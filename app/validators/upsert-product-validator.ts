import { z } from "zod";

export const upsertProductFormSchema = z.object({
  id: z.uuid().optional(),
  name: z.string().trim().min(1, "O nome do produto é obrigatório"),
  price: z.number().min(0.01, "O preço do produto é obrigatório"),
  stock: z.coerce
    .number<number>()
    .min(0, "A quantidade de estoque é obrigatória"),
});

export type UpsertProductFormSchema = z.infer<typeof upsertProductFormSchema>;
