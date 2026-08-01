import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

const news = defineCollection({
  type: 'content',
  schema: postSchema,
});

const blog = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = { news, blog };
