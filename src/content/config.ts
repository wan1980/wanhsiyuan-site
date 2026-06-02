import { defineCollection, z } from "astro:content";

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { research };
