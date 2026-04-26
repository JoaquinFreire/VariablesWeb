import { Suspense, lazy, useEffect, useState } from 'react'
import './App.css'

import { ErrorBoundary } from './components/ErrorBoundary'
import { SEOHead } from './components/SEOHead'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from './data/constants'

const Services = lazy(() =>
  import('./components/Services').then((module) => ({ default: module.Services }))
)
const Sectors = lazy(() =>
  import('./components/Sectors').then((module) => ({ default: module.Sectors }))
)
const Portfolio = lazy(() =>
  import('./components/Portfolio').then((module) => ({ default: module.Portfolio }))
)
const About = lazy(() =>
  import('./components/About').then((module) => ({ default: module.About }))
)
const Blog = lazy(() =>
  import('./components/Blog').then((module) => ({ default: module.Blog }))
)
const Process = lazy(() =>
  import('./components/Process').then((module) => ({ default: module.Process }))
)
const Contact = lazy(() =>
  import('./components/Contact').then((module) => ({ default: module.Contact }))
)

function buildWhatsappUrl() {
  const message = encodeURIComponent(
    'Hola, vi la web de Variable Web y quiero recibir asesoramiento.'
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

function SectionFallback({ minHeight = '24rem' }) {
  return <div aria-hidden="true" style={{ minHeight }} />
}

function getCurrentPath() {
  if (typeof window === 'undefined') {
    return '/'
  }

  const pathname = window.location.pathname.replace(/\/+$/, '')
  return pathname || '/'
}

function HomePage({ whatsappUrl }) {
  return (
    <main>
      <ErrorBoundary>
        <Hero whatsappUrl={whatsappUrl} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionFallback minHeight="46rem" />}>
          <Services />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionFallback minHeight="30rem" />}>
          <Process />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionFallback minHeight="26rem" />}>
          <Sectors />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionFallback minHeight="34rem" />}>
          <Portfolio />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionFallback minHeight="28rem" />}>
          <About />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<SectionFallback minHeight="36rem" />}>
          <Contact />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}

function BlogPage({ whatsappUrl }) {
  return (
    <main>
      <ErrorBoundary>
        <Suspense fallback={<SectionFallback minHeight="70rem" />}>
          <Blog whatsappUrl={whatsappUrl} />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}

function NotFoundPage() {
  return (
    <main>
      <section className="section not-found-page">
        <div className="not-found-card">
          <span className="section-kicker">404</span>
          <h1>Esta pagina no existe o cambio de lugar.</h1>
          <p>
            Puede que la URL este incompleta, que el contenido se haya movido o que
            el enlace ya no este disponible. Desde aqui puedes volver al inicio o ir
            directo a las secciones principales.
          </p>

          <div className="not-found-actions">
            <a className="primary-button" href="/">
              Ir al inicio
            </a>
            <a className="secondary-button" href="/blog">
              Ver blog
            </a>
            <a className="secondary-button" href="/#servicios">
              Ver servicios
            </a>
            <a className="secondary-button" href="/#contacto">
              Contactar
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const handlePopState = () => setCurrentPath(getCurrentPath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const isBlogPage = currentPath === '/blog'
  const isNotFoundPage = currentPath !== '/' && currentPath !== '/blog'
  const whatsappUrl = buildWhatsappUrl()

  const toggleNav = () => setIsMobileNavOpen((current) => !current)
  const closeNav = () => setIsMobileNavOpen(false)

  const seo = isBlogPage
    ? {
        title: 'Blog de Variable Web | SEO, conversion y sistemas para salud y servicios',
        description:
          'Guias y estrategias sobre paginas web, SEO local, conversion y sistemas para odontologos, opticas y empresas de servicios.',
        path: '/blog',
      }
    : isNotFoundPage
      ? {
          title: 'Pagina no encontrada | Variable Web',
          description:
            'La pagina que intentaste abrir no existe o cambio de lugar. Desde aqui puedes volver al inicio, ver el blog o contactar a Variable Web.',
          path: currentPath,
        }
    : {
        title: undefined,
        description: undefined,
        path: '/',
      }

  return (
    <div className="page-shell" id="top">
      <SEOHead {...seo} />

      <Header
        isBlogPage={isBlogPage || isNotFoundPage}
        isMobileNavOpen={isMobileNavOpen}
        onToggleNav={toggleNav}
        onNavClose={closeNav}
      />

      {isBlogPage ? (
        <BlogPage whatsappUrl={whatsappUrl} />
      ) : isNotFoundPage ? (
        <NotFoundPage />
      ) : (
        <HomePage whatsappUrl={whatsappUrl} />
      )}

      <footer className="site-footer">
        <a
          className="site-footer-instagram"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="me noreferrer"
          aria-label="Instagram de Variable Web"
        >
          Instagram: @variable_web
        </a>
        <p>&copy; 2026 Variable Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
