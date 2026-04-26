import { useEffect } from 'react'
import { teamMembers } from '../data/team'
import { INSTAGRAM_URL, SEO_DESCRIPTION, SEO_TITLE } from '../data/constants'

const configuredSiteUrl = import.meta.env.VITE_SITE_URL

export function SEOHead({ title = SEO_TITLE, description = SEO_DESCRIPTION, path = '/' }) {
  useEffect(() => {
    const origin =
      configuredSiteUrl ||
      (typeof window !== 'undefined' ? window.location.origin : 'https://variableweb.com')
    const normalizedPath = path === '/' ? '/' : path.replace(/\/+$/, '')
    const canonicalUrl = `${origin}${normalizedPath}`
    const iconUrl = `${origin}/favicon-512.png`

    document.title = title
    document.documentElement.lang = 'es'

    const ensureMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        document.head.appendChild(element)
      }
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value)
      })
    }

    const ensureLink = (selector, attributes) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('link')
        document.head.appendChild(element)
      }
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value)
      })
    }

    ensureMeta('meta[name="description"]', { name: 'description', content: description })
    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    })
    ensureMeta('meta[name="author"]', { name: 'author', content: 'Variable Web' })
    ensureMeta('meta[name="application-name"]', { name: 'application-name', content: 'Variable Web' })
    ensureMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#ff7a00' })
    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'es_AR' })
    ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Variable Web' })
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: iconUrl })
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: iconUrl })
    ensureLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })
    ensureLink('link[rel="icon"][sizes="any"]', { rel: 'icon', sizes: 'any', href: '/favicon.ico' })
    ensureLink('link[rel="alternate icon"][type="image/svg+xml"]', {
      rel: 'alternate icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    })
    ensureLink('link[rel="apple-touch-icon"]', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' })
    ensureLink('link[rel="manifest"]', { rel: 'manifest', href: '/site.webmanifest' })

    const organizationId = `${origin}/#organization`
    const websiteId = `${origin}/#website`
    const serviceId = `${origin}/#service`
    const sameAs = [INSTAGRAM_URL, ...teamMembers.map((member) => member.linkedin)].filter(Boolean)

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': organizationId,
          name: 'Variable Web',
          url: `${origin}/`,
          logo: iconUrl,
          image: iconUrl,
          sameAs,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: '+54 9 351 311 7202',
            availableLanguage: ['Spanish'],
          },
        },
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: `${origin}/`,
          name: 'Variable Web',
          description: SEO_DESCRIPTION,
          publisher: { '@id': organizationId },
          inLanguage: 'es',
        },
        {
          '@type': 'ProfessionalService',
          '@id': serviceId,
          name: 'Variable Web',
          url: `${origin}/`,
          image: iconUrl,
          description: SEO_DESCRIPTION,
          areaServed: [
            'Argentina', 'Chile', 'Uruguay', 'Paraguay', 'Bolivia',
            'Peru', 'Brasil', 'Mexico', 'Espana', 'Estados Unidos',
          ],
          serviceType: [
            'Paginas web', 'Landing pages', 'Tiendas online',
            'Webs corporativas', 'Sistemas a medida', 'Automatizacion de procesos',
          ],
          knowsAbout: [
            'Paginas web para profesionales',
            'Paginas web para negocios',
            'Webs para consultorios y clinicas',
            'Tiendas online para marcas',
            'Sistemas web para gestion',
            'SEO para negocios de servicios',
          ],
          brand: { '@id': organizationId },
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          isPartOf: { '@id': websiteId },
          about: { '@id': serviceId },
          inLanguage: 'es',
        },
      ],
    }

    let jsonLd = document.head.querySelector('script[data-seo="structured-data"]')
    if (!jsonLd) {
      jsonLd = document.createElement('script')
      jsonLd.type = 'application/ld+json'
      jsonLd.setAttribute('data-seo', 'structured-data')
      document.head.appendChild(jsonLd)
    }
    jsonLd.textContent = JSON.stringify(structuredData)
  }, [description, path, title])

  return null
}
