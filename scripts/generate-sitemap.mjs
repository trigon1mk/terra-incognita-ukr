import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { allPosts } from '../.content-collections/generated/index.js'

const BASE_URL = 'https://temnageografia.com' // Replace with your actual domain

const routes = [
  '/',
  '/novoyavorivsk-mysteries',
  ...new Set(allPosts.flatMap(p => p.categories).map(c => `/category/${encodeURIComponent(c)}`)),
  ...allPosts.map(p => `/posts/${p.slug}`)
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`

const outputPath = join(process.cwd(), 'public/sitemap.xml')
writeFileSync(outputPath, sitemap.trim())

console.log(`Sitemap generated with ${routes.length} routes at ${outputPath}`)
