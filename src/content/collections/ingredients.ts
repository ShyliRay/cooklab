import { defineCollection, z } from "astro:content";

export const ingredients = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),

    image: z.string().optional(),

    category: z.string().optional(), // e.g. "fat", "acid", "aromatic"
    aliases: z.array(z.string()).optional(),

    flavorNotes: z.array(z.string()).optional(),
    functions: z.array(z.string()).optional(), // what it does in cooking

    substitutions: z
      .array(
        z.object({
          item: z.string(),
          notes: z.string().optional(),
        })
      )
      .optional(),

    storage: z.string().optional(),
  }),
});
