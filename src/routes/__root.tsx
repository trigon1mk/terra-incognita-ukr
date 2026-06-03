import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { NotFound } from '@/components/not-found'
import { ErrorComponent } from '@/components/error-component'
import '../styles.css'

const SITE_NAME = 'ТемнаГеографія'
const SITE_DESCRIPTION =
  'Незалежне журналістське видання про місця, події та людей, яких офіційна історія воліє замовчати. Розслідування, аномалії, закриті міста УРСР.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${SITE_NAME} — Темна географія України` },
      { name: 'description', content: SITE_DESCRIPTION },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
      { name: 'language', content: 'uk' },
      { name: 'author', content: 'Редакція ТемнаГеографія' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: `${SITE_NAME} — Темна географія України` },
      { property: 'og:description', content: SITE_DESCRIPTION },
      { property: 'og:locale', content: 'uk_UA' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${SITE_NAME} — Темна географія України` },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: ErrorComponent,
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
