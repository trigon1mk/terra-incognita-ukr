// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
var posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    categories: z.array(z.string()),
    slug: z.string().optional(),
    image: z.string(),
    date: z.string(),
    author: z.string().default("\u0420\u0435\u0434\u0430\u043A\u0446\u0456\u044F"),
    authorRole: z.string().default("\u0416\u0443\u0440\u043D\u0430\u043B\u0456\u0441\u0442"),
    readTime: z.string().default("10 \u0445\u0432"),
    featured: z.boolean().default(false),
    content: z.string()
  }),
  transform: async (doc) => {
    return {
      ...doc,
      slug: doc.slug || doc.title.toLowerCase().replace(".md", "").replace(/[^\w-]+/g, "_")
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
