import { z } from "zod";

const carSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  brand: z.string(),
  year: z.number().positive(),
  km: z.number().positive(),
});

const carCreateSchema = carSchema.omit({ id: true });
const carUpdateSchema = carCreateSchema.partial();
const carReturnSchema = carSchema;

export { carCreateSchema, carUpdateSchema, carReturnSchema };
