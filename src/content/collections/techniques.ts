import { defineCollection, z } from "astro:content";

export const techniques = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string(),
    subcategory: z.string().optional(),

    pubDate: z.coerce.date(),
    image: z.string().optional(),

    difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),

    activeTimeMin: z.number().optional(),
    passiveTimeMin: z.number().optional(),

    keyVariables: z.array(z.string()).optional(),
    requires: z.array(z.string()).optional(),
    avoids: z.array(z.string()).optional(),

    temperatureRange: z
      .object({
        minC: z.number().optional(),
        maxC: z.number().optional(),
      })
      .optional(),

    commonFoods: z.array(z.string()).optional(),
    relatedTechniques: z.array(z.string()).optional(),
    commonMistakes: z.array(z.string()).optional(),

    sensoryCues: z
      .object({
        sight: z.string().optional(),
        smell: z.string().optional(),
        sound: z.string().optional(),
        touch: z.string().optional(),
      })
      .optional(),

    scienceNotes: z.array(z.string()).optional(),
    equipment: z.array(z.string()).optional(),
    pairsWellWith: z.array(z.string()).optional(),
  }),
});
