import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    notionUrl: z.string().optional(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    period: z.string(),
    description: z.string(),
    achievements: z.array(z.string()),
    stack: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'experience': experienceCollection,
};
