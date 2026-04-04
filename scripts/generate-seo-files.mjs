import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const siteUrl = (process.env.VITE_SITE_URL || 'https://variableweb.com').replace(/\/+$/, '')
const publicDir = resolve(process.cwd(), 'public')

mkdirSync(publicDir, { recursive: true })

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

writeFileSync(resolve(publicDir, 'robots.txt'), robotsTxt, 'utf8')
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemapXml, 'utf8')
