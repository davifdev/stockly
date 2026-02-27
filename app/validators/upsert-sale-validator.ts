import { z } from "zod";

export const upsertSaleSchemma = z.object({
  id: z.uuid().optional(),
  products: z.array(
    z.object({
      id: z.uuid(),
      quantity: z.number().int().positive(),
    }),
  ),
});

export type UpsertSaleSchema = z.infer<typeof upsertSaleSchemma>;
