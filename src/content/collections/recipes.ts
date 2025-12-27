import { defineCollection, z } from "astro:content";

export const recipes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    servings: z.number(),
    totalTimeMin: z.number(),
    restTimeMin: z.number().optional(),

    cuisine: z.string(),
    flavorProfile: z.array(z.string()),

    ingredients: z.array(
      z.object({
        key: z.string(),
        amount: z.number(),
        unit: z.string(),
        item: z.string(),
        alternative: z.string().optional(),
      })
    ),

    cookware: z.array(z.string()).optional(),
    instructions: z.array(z.string()),
    tips: z.array(z.string()).optional(),

    nutrition: z
      .object({
        calories: z.number().optional(),
        protein_g: z.number().optional(),
        carbs_g: z.number().optional(),
        fat_g: z.number().optional(),
      })
      .optional(),
  }),
});
