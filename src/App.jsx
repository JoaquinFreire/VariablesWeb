import { Suspense, lazy, useEffect, useState } from 'react'
import './App.css'

import { ErrorBoundary } from './components/ErrorBoundary'
import { SEOHead } from './components/SEOHead'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WHATSAPP_NUMBER } from './data/constants'

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

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const handlePopState = () => setCurrentPath(getCurrentPath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const isBlogPage = currentPath === '/blog'
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
    : {
        title: undefined,
        description: undefined,
        path: '/',
      }

  return (
    <div className="page-shell" id="top">
      <SEOHead {...seo} />

      <Header
        isBlogPage={isBlogPage}
        isMobileNavOpen={isMobileNavOpen}
        onToggleNav={toggleNav}
        onNavClose={closeNav}
      />

      {isBlogPage ? (
        <BlogPage whatsappUrl={whatsappUrl} />
      ) : (
        <HomePage whatsappUrl={whatsappUrl} />
      )}

      <footer className="site-footer">
        <p>&copy; 2026 Variable Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
