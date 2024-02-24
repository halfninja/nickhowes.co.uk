import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string())
  }),
})

export const collections = {
  'blog': blogCollection,
};