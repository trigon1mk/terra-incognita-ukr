import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    categories: z.array(z.string()),
    slug: z.string().optional(),
    image: z.string(),
    date: z.string(),
    author: z.string().default('Редакція'),
    authorRole: z.string().default('Журналіст'),
    readTime: z.string().default('10 хв'),
    featured: z.boolean().default(false),
    content: z.string(),
  }),
  transform: async (doc) => {
    return {
      ...doc,
      slug:
        doc.slug ||
        doc.title
          .toLowerCase()
          .replace('.md', '')
          .replace(/[^\w-]+/g, '_'),
    }
  },
})

export default defineConfig({
  collections: [posts],
})
