import { defineCollection, z } from 'astro:content';
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.string().date(),
    tags: z.array(z.string()),
    image: z.string()
  }),
});

const project = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    slug: z.string(),
    IsIt: z.string(),
    githubURL: z.string(),
    liveSiteURL: z.string()
  })
});


const websites = defineCollection({
  loader: file('src/data/websites.json'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    slug: z.string(),
    IsIt: z.string(),
    githubURL: z.string(),
    liveSiteURL: z.string()
  })
});

const games = defineCollection({
  loader: file('src/data/games.json'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    slug: z.string(),
    IsIt: z.string(),
    githubURL: z.string(),
    liveSiteURL: z.string()
  })
});



export const collections = { project, blog, websites, games };