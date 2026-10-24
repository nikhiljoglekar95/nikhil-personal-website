import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const insights = defineCollection({
  loader: glob({ base: './src/content/insights', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(), description: z.string(), category: z.enum(['Privacy & Data Protection','AI Governance','Privacy in Practice']),
    date: z.coerce.date(), readingTime: z.string(), draft: z.boolean().default(true), featured: z.boolean().default(false)
  })
});
export const collections = { insights };
