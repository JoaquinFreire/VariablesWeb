import { useEffect, useRef, useState } from 'react'
import './App.css'

const services = [
  {
    title: 'Landing pages',
    icon: 'rocket',
    description:
      'Paginas claras y enfocadas para presentar una propuesta, captar consultas o lanzar una idea con impacto.',
    highlight: 'Ideal para campanas, lanzamientos y proyectos que necesitan salir rapido y verse profesionales.',
  },
  {
    title: 'Tiendas online',
    icon: 'store',
    description:
      'E-commerce con catalogo, carrito, pagos y una experiencia simple para vender productos de forma ordenada.',
    highlight: 'Perfecto para marcas que quieren vender online y tener mejor control de su catalogo.',
  },
  {
    title: 'Webs corporativas',
    icon: 'layers',
    description:
      'Sitios profesionales para estudios, consultorios, equipos y empresas que necesitan comunicar mejor lo que hacen.',
    highlight: 'Sirven para transmitir confianza, explicar servicios y mostrar una imagen solida.',
  },
  {
    title: 'Sistemas a medida',
    icon: 'workflow',
    description:
      'Paneles, reservas, gestion interna y herramientas digitales creadas para ahorrar tiempo y ordenar procesos.',
    highlight: 'Cuando una plantilla no alcanza, armamos una solucion adaptada a tu forma de trabajar.',
  },
]

const industries = [
  'Odontologos',
  'Abogados',
  'Inmobiliarias',
  'Opticas',
  'Restaurantes',
  'Esteticas',
  'Gym y entrenadores',
  'Arquitectura',
  'Talleres',
  'Clinicas',
  'Tiendas de ropa',
  'Hoteles y alojamientos',
]

const projects = [
  {
    name: 'Dental Sonrisas',
    type: 'Landing premium',
    image: '/portfolio/landing.webp',
    alt: 'Landing page para clinica dental con llamado a la accion y reserva de turnos',
    summary:
      'Landing page de alta conversión diseñada para profesionales de la salud. Enfocada en la captación de pacientes mediante una interfaz limpia, beneficios claros y un sistema de reserva de citas directo.',
    result: '+60% de efectividad en la conversión de visitantes a consultas reales.',
  },
  {
    name: 'Hábitat Vanguardia – Arquitectura Sustentable',
    type: 'Web corporativa',
    image: '/portfolio/coorporativa.webp',
    alt: 'Sitio corporativo de arquitectura con portfolio visual y secciones institucionales',
    summary:
      'Sitio institucional diseñado para proyectar solidez y vanguardia. Ideal para empresas que buscan destacar su portafolio de proyectos, servicios especializados y valores corporativos con una estética impecable.',
    result: 'Posicionamiento de marca profesional que genera confianza inmediata en clientes de alto valor.',
  },
  {
    name: 'Aroma Ancestral – Café de Especialidad',
    type: 'Tienda online',
    image: '/portfolio/tienda.webp',
    alt: 'Tienda online de cafe con catalogo de productos y experiencia de compra mobile',
    summary:
      'E-commerce premium con enfoque en la experiencia sensorial del usuario. Incluye catálogo autogestionable, fichas de producto optimizadas para la venta y un flujo de carrito rápido para reducir el abandono de compra.',
    result: 'Interfaz ultra-rápida y optimizada para ventas desde cualquier dispositivo móvil.',
  },
  {
    name: 'Ruta Ágil – Gestión Logística',
    type: 'Sistema a medida',
    image: '/portfolio/sistema.webp',
    alt: 'Dashboard logistico con metricas, seguimiento y gestion operativa',
    summary:
      'Panel de control (Dashboard) interno para la optimización de operaciones complejas. Permite el seguimiento de flota en tiempo real, monitoreo de métricas críticas y reportes automatizados para la toma de decisiones.',
    result: 'Reducción del desorden administrativo y control total sobre los procesos internos del equipo.',
  },
]

const testimonials = [
  {
    quote:
      'Necesitabamos dejar de vernos amateurs. Nos hicieron una web que transmite seriedad y nos empezaron a llegar consultas mucho mas calificadas.',
    author: 'Camila Torres',
    role: 'Estudio contable',
  },
  {
    quote:
      'La pagina quedo hermosa, pero lo mejor fue que pensaron tambien como ordenar consultas y facilitar el contacto. El WhatsApp se mueve mucho mas.',
    author: 'Mariano Sosa',
    role: 'Local de muebles',
  },
  {
    quote:
      'Nos guiaron con textos, estructura y diseno. No fue solo una web, fue ordenar la forma en que mostramos el negocio.',
    author: 'Lucia Benitez',
    role: 'Centro odontologico',
  },
]

const steps = [
  'Escuchamos tu negocio y definimos la solucion que mejor se adapta a tu objetivo.',
  'Disenamos una experiencia visual que se vea profesional y memorable.',
  'Lanzamos la web o sistema listo para captar consultas, vender, reservar u ordenar procesos.',
]

const brandItems = [
  'Landing pages',
  'Tiendas online',
  'Webs corporativas',
  'Sistemas a medida',
  'Reservas y automatizacion',
]

const teamMembers = [
  {
    name: 'Mina Tiziano',
    linkedin: 'https://www.linkedin.com/in/tiziano-mina/',
  },
  {
    name: 'Freire Joaquin',
    linkedin: 'https://www.linkedin.com/in/joaquin-freire/',
  },
  {
    name: 'Avila Horacio',
    linkedin: 'https://www.linkedin.com/in/horacio-avila06/',
  },
]

const countryCodes = [
  { flag: '\uD83C\uDDE6\uD83C\uDDF7', label: 'Argentina', code: '+54' },
  { flag: '\uD83C\uDDE8\uD83C\uDDF1', label: 'Chile', code: '+56' },
  { flag: '\uD83C\uDDFA\uD83C\uDDFE', label: 'Uruguay', code: '+598' },
  { flag: '\uD83C\uDDF5\uD83C\uDDFE', label: 'Paraguay', code: '+595' },
  { flag: '\uD83C\uDDE7\uD83C\uDDF4', label: 'Bolivia', code: '+591' },
  { flag: '\uD83C\uDDF5\uD83C\uDDEA', label: 'Peru', code: '+51' },
  { flag: '\uD83C\uDDE7\uD83C\uDDF7', label: 'Brasil', code: '+55' },
  { flag: '\uD83C\uDDF2\uD83C\uDDFD', label: 'Mexico', code: '+52' },
  { flag: '\uD83C\uDDEA\uD83C\uDDF8', label: 'Espana', code: '+34' },
  { flag: '\uD83C\uDDFA\uD83C\uDDF8', label: 'Estados Unidos', code: '+1' },
]

const whatsappNumber = '5493513117202'
const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const configuredSiteUrl = import.meta.env.VITE_SITE_URL
const seoTitle = 'Variable Web | Paginas web, tiendas online y sistemas a medida'
const seoDescription =
  'Variable Web crea paginas web, tiendas online y sistemas a medida para negocios y profesionales que quieren verse mejor, captar consultas y trabajar con mas orden.'

function SEOHead() {
  useEffect(() => {
    const origin =
      configuredSiteUrl ||
      (typeof window !== 'undefined' ? window.location.origin : 'https://variableweb.com')
    const canonicalUrl = `${origin}/`
    const iconUrl = `${origin}/favicon-512.png`

    document.title = seoTitle
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

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: seoDescription,
    })
    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    })
    ensureMeta('meta[name="author"]', {
      name: 'author',
      content: 'Variable Web',
    })
    ensureMeta('meta[name="application-name"]', {
      name: 'application-name',
      content: 'Variable Web',
    })
    ensureMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: '#ff7a00',
    })
    ensureMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    ensureMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'es_AR',
    })
    ensureMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Variable Web',
    })
    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seoTitle,
    })
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seoDescription,
    })
    ensureMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: iconUrl,
    })
    ensureMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    ensureMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seoTitle,
    })
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seoDescription,
    })
    ensureMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: iconUrl,
    })
    ensureLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    })
    ensureLink('link[rel="icon"][sizes="any"]', {
      rel: 'icon',
      sizes: 'any',
      href: '/favicon.ico',
    })
    ensureLink('link[rel="alternate icon"][type="image/svg+xml"]', {
      rel: 'alternate icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    })
    ensureLink('link[rel="apple-touch-icon"]', {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    })
    ensureLink('link[rel="manifest"]', {
      rel: 'manifest',
      href: '/site.webmanifest',
    })

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${canonicalUrl}#organization`,
          name: 'Variable Web',
          url: canonicalUrl,
          logo: iconUrl,
          image: iconUrl,
          sameAs: teamMembers.map((member) => member.linkedin),
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: '+54 9 351 311 7202',
            availableLanguage: ['Spanish'],
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${canonicalUrl}#website`,
          url: canonicalUrl,
          name: 'Variable Web',
          description: seoDescription,
          publisher: {
            '@id': `${canonicalUrl}#organization`,
          },
          inLanguage: 'es',
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${canonicalUrl}#service`,
          name: 'Variable Web',
          url: canonicalUrl,
          image: iconUrl,
          description: seoDescription,
          areaServed: [
            'Argentina',
            'Chile',
            'Uruguay',
            'Paraguay',
            'Bolivia',
            'Peru',
            'Brasil',
            'Mexico',
            'Espana',
            'Estados Unidos',
          ],
          serviceType: [
            'Paginas web',
            'Landing pages',
            'Tiendas online',
            'Webs corporativas',
            'Sistemas a medida',
            'Automatizacion de procesos',
          ],
          knowsAbout: [
            'Paginas web para profesionales',
            'Paginas web para negocios',
            'Webs para consultorios y clinicas',
            'Tiendas online para marcas',
            'Sistemas web para gestion',
          ],
          brand: {
            '@id': `${canonicalUrl}#organization`,
          },
        },
      ],
    }

    const ensureJsonLd = (key, data) => {
      let jsonLd = document.head.querySelector(`script[data-seo="${key}"]`)
      if (!jsonLd) {
        jsonLd = document.createElement('script')
        jsonLd.type = 'application/ld+json'
        jsonLd.setAttribute('data-seo', key)
        document.head.appendChild(jsonLd)
      }
      jsonLd.textContent = JSON.stringify(data)
    }

    ensureJsonLd('structured-data', structuredData)
  }, [])

  return null
}

function LogoMark() {
  return (
    <a className="logo" href="#top" aria-label="Variable Web">
      <div className="logo-badge" aria-hidden="true">
        <svg viewBox="0 0 88 88">
          <circle cx="44" cy="44" r="38" fill="#ffffff" />
          <text x="21" y="54" className="logo-brace">
            {'{'}
          </text>
          <text x="37" y="52" className="logo-v">
            v
          </text>
          <text x="52" y="54" className="logo-brace">
            {'}'}
          </text>
        </svg>
      </div>
      <span className="logo-copy">
        <strong>Variable Web</strong>
        <small>Webs y sistemas para comunicar, vender y organizar mejor</small>
      </span>
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.05 4.94A9.77 9.77 0 0 0 12.1 2C6.7 2 2.3 6.4 2.3 11.8c0 1.72.45 3.4 1.3 4.88L2 22l5.47-1.44a9.75 9.75 0 0 0 4.63 1.18h.01c5.4 0 9.8-4.4 9.8-9.8 0-2.62-1.02-5.08-2.86-6.99Zm-6.94 15.14h-.01a8.08 8.08 0 0 1-4.11-1.12l-.29-.17-3.25.86.87-3.17-.19-.33a8.06 8.06 0 0 1-1.23-4.28c0-4.46 3.64-8.1 8.11-8.1 2.16 0 4.18.84 5.71 2.38a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.64 8.11-8.09 8.11Zm4.45-6.07c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.71-.63-1.18-1.4-1.32-1.63-.14-.24-.01-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.39.08-.16.04-.29-.02-.41-.06-.12-.55-1.33-.75-1.83-.2-.48-.41-.41-.55-.42h-.47c-.16 0-.41.06-.62.29-.21.24-.82.8-.82 1.94 0 1.15.84 2.25.96 2.41.12.16 1.65 2.53 4.01 3.54.56.24 1 .38 1.34.49.56.18 1.06.15 1.46.09.44-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="success-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.5A9.5 9.5 0 1 0 21.5 12 9.51 9.51 0 0 0 12 2.5Zm4.46 7.36-5.08 5.89a1 1 0 0 1-1.47.07L7.38 13.4a1 1 0 1 1 1.44-1.38l1.77 1.85 4.35-5.05a1 1 0 0 1 1.52 1.04Z"
      />
    </svg>
  )
}

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      className={`carousel-arrow-icon ${direction === 'left' ? 'is-left' : ''}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41Z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3Zm13.19 9.48c0-3.15-1.68-4.61-3.93-4.61a3.4 3.4 0 0 0-3.06 1.69V8.5H8.06c.04.7 0 10.5 0 10.5h3.39v-5.86c0-.31.02-.62.11-.84.24-.62.79-1.26 1.72-1.26 1.22 0 1.7.93 1.7 2.28V19H18.4v-5.52Z"
      />
    </svg>
  )
}

function ServiceIcon({ type }) {
  if (type === 'store') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 9.5 5.2 5h13.6L20 9.5v1.1a2.8 2.8 0 0 1-1.5 2.47V19a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-5.93A2.8 2.8 0 0 1 4 10.6V9.5Zm2.75 3.86V18h3.9v-3.2a1 1 0 0 1 1-1h.7a1 1 0 0 1 1 1V18h3.9v-4.64a2.75 2.75 0 0 1-2.54-1.2 2.77 2.77 0 0 1-4.42 0 2.75 2.75 0 0 1-4.54 1.2ZM6.74 7l-.56 2.1v1.5a1 1 0 1 0 2 0V9.1L8.66 7H6.74Zm3.97 0-.35 2.18v1.42a1 1 0 1 0 2 0V9.18L12.01 7h-1.3Zm3.6 0-.35 2.18v1.42a1 1 0 1 0 2 0V9.1L15.29 7h-.98Zm2.96 2.1v1.5a1 1 0 1 0 2 0V9.1L18.7 7h-1.92l.49 2.1Z"
        />
      </svg>
    )
  }
  if (type === 'layers') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="m12 3 8 4.5-8 4.5-8-4.5L12 3Zm-6.7 7.42L12 14.16l6.7-3.74 1.3.73L12 15.66l-8-4.5 1.3-.74Zm0 3.5L12 17.66l6.7-3.74 1.3.73-8 4.5-8-4.5 1.3-.73Z"
        />
      </svg>
    )
  }
  if (type === 'workflow') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm10 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM7 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm1-7h5a1 1 0 1 1 0 2H8v1.59l1.7 1.7a1 1 0 0 1 .3.7V15a1 1 0 1 1-2 0v-1.59l-1.7-1.7A1 1 0 0 1 6 11V9.82A3 3 0 0 1 4.1 7H3a1 1 0 1 1 0-2h1.1A3 3 0 0 1 8 7Zm8 2a1 1 0 1 1 0-2h.9A3 3 0 0 1 21 5h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3 3c-.35 0-.7-.06-1-.17V11a1 1 0 0 1-.3.7L15 13.41V15a1 1 0 1 1-2 0v-2.3a1 1 0 0 1 .3-.7l1.7-1.7V9h1Z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2 14.75 8.25 21 11l-6.25 2.75L12 20l-2.75-6.25L3 11l6.25-2.75L12 2Zm0 4.9-.94 2.16L8.9 10l2.16.94L12 13.1l.94-2.16L15.1 10l-2.16-.94L12 6.9Z"
      />
    </svg>
  )
}

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: 'Landing page',
    phoneCountry: '+54',
    phoneNumber: '',
    message: '',
  })
  const [submitState, setSubmitState] = useState({
    status: 'idle',
    message: '',
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const portfolioRef = useRef(null)
  const testimonialsRef = useRef(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const fullPhone = formData.phoneNumber
    ? `${formData.phoneCountry} ${formData.phoneNumber}`
    : 'No indicado'

  const whatsappMessage = encodeURIComponent(
    [
      'Hola, vi la web de Variable Web y quiero recibir asesoramiento.',
      `Nombre: ${formData.name || 'No indicado'}`,
      `Email: ${formData.email || 'No indicado'}`,
      `Negocio: ${formData.business || 'No indicado'}`,
      `Telefono: ${fullPhone}`,
      `Servicio: ${formData.service}`,
      `Detalle: ${formData.message || 'Quiero informacion sobre tiempos, precios y cual seria la mejor solucion para mi negocio.'}`,
    ].join('\n')
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const onSubmit = async (event) => {
    event.preventDefault()

    if (!web3FormsAccessKey) {
      setSubmitState({
        status: 'error',
        message:
          'Falta configurar la clave de Web3Forms en el archivo .env.',
      })
      return
    }

    setSubmitState({
      status: 'sending',
      message: 'Enviando consulta...',
    })

    const form = event.target
    const submission = new FormData()
    submission.append('access_key', web3FormsAccessKey)
    submission.append('subject', 'Nueva consulta desde Variable Web')
    submission.append('from_name', 'Variable Web')
    submission.append('name', formData.name)
    submission.append('email', formData.email)
    submission.append('business', formData.business)
    submission.append('service', formData.service)
    submission.append('phone', fullPhone)
    submission.append('message', formData.message)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submission,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitState({
          status: 'success',
          message:
            'Consulta enviada con exito. Te responderemos lo antes posible.',
        })
        setShowSuccessModal(true)
        setFormData({
          name: '',
          email: '',
          business: '',
          service: 'Landing page',
          phoneCountry: '+54',
          phoneNumber: '',
          message: '',
        })
        form.reset()
      } else {
        setSubmitState({
          status: 'error',
          message:
            'No se pudo enviar el formulario. Intenta nuevamente o escribenos por WhatsApp.',
        })
      }
    } catch {
      setSubmitState({
        status: 'error',
        message:
          'No se pudo conectar con el formulario. Intenta nuevamente o escribenos por WhatsApp.',
      })
    }
  }

  const scrollCarousel = (ref, direction) => {
    if (!ref.current) return
    const amount = ref.current.clientWidth * 0.86 * direction
    ref.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div className="page-shell" id="top">
      <SEOHead />
      {showSuccessModal ? (
        <div className="success-modal-backdrop">
          <div
            className="success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
          >
            <div className="success-badge">
              <CheckIcon />
            </div>
            <span className="success-kicker">Consulta enviada</span>
            <h2 id="success-modal-title">Recibimos tu mensaje correctamente</h2>
            <p>
              Gracias por escribirnos. En breve te responderemos para avanzar con
              tu web, sistema o automatizacion.
            </p>
            <button
              className="primary-button success-close"
              type="button"
              onClick={() => setShowSuccessModal(false)}
            >
              Perfecto
            </button>
          </div>
        </div>
      ) : null}

      <header className="topbar">
        <div className="topbar-surface">
          <LogoMark />

          <button
            className={`nav-toggle ${isMobileNavOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={isMobileNavOpen}
            aria-controls="primary-navigation"
            aria-label={isMobileNavOpen ? 'Cerrar menu principal' : 'Abrir menu principal'}
            onClick={() => setIsMobileNavOpen((current) => !current)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <nav
            className={`nav ${isMobileNavOpen ? 'is-open' : ''}`}
            id="primary-navigation"
            aria-label="Navegacion principal"
          >
            <div className="nav-links">
              <a href="#servicios" onClick={() => setIsMobileNavOpen(false)}>
                Servicios
              </a>
              <a href="#proyectos" onClick={() => setIsMobileNavOpen(false)}>
                Proyectos
              </a>
              <a href="#nosotros" onClick={() => setIsMobileNavOpen(false)}>
                Nosotros
              </a>
              <a href="#contacto" onClick={() => setIsMobileNavOpen(false)}>
                Contacto
              </a>
            </div>
          </nav>

          <a
            className="nav-cta"
            href="#contacto"
            onClick={() => setIsMobileNavOpen(false)}
          >
            Contar mi proyecto
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">
              Paginas web, tiendas online y sistemas a medida para negocios y profesionales
            </div>
            <h1>Creamos paginas web y sistemas para negocios que necesitan vender y organizarse mejor.</h1>
            <p className="hero-lead">
              Disenamos paginas para captar consultas, presentar mejor tu
              negocio y dar una imagen profesional, pero tambien sistemas web
              para organizar turnos, stock, clientes, ventas y procesos
              internos. Si hoy trabajas con papel, WhatsApp desordenado o tareas
              manuales, te ayudamos a llevarlo a digital.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#contacto">
                Contar mi proyecto
              </a>
              <a
                className="secondary-button"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                Hablar por WhatsApp
              </a>
            </div>

            <div className="hero-metrics">
              <article>
                <strong>Paginas claras</strong>
                <span>Tu propuesta se entiende en segundos.</span>
              </article>
              <article>
                <strong>Capta y ordena</strong>
                <span>Sirve para mostrar mejor tu propuesta y gestionar mejor.</span>
              </article>
              <article>
                <strong>Hecho a medida</strong>
                <span>Desde una landing hasta un sistema para automatizar tareas.</span>
              </article>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>

            <div className="browser-card main-card">
              <div className="browser-top">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-body">
                <div className="mini-logo">
                  <span>{'{'}</span>
                  <b>v</b>
                  <span>{'}'}</span>
                </div>
                <h2>Tu negocio con presencia de alto nivel</h2>
                <p>
                  Una solucion digital pensada para comunicar mejor lo que haces
                  y ordenar como funciona tu negocio.
                </p>
                <div className="mock-actions">
                  <span className="mock-primary">Quiero resultados</span>
                  <span className="mock-secondary">Ver proyectos</span>
                </div>
              </div>
            </div>

            <div className="browser-card floating-card top-card">
              <p>Consultas automatizadas</p>
              <strong>WhatsApp + formularios + CTA</strong>
            </div>

            <div className="browser-card floating-card bottom-card">
              <p>Rubros listos para escalar</p>
              <strong>Salud, legal, retail, gastronomia y mas</strong>
            </div>
          </div>
        </section>

        <section className="brand-strip">
          <div className="brand-strip-track">
            {brandItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="brand-strip-track brand-strip-track-clone" aria-hidden="true">
            {brandItems.map((item) => (
              <span key={`clone-${item}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section section-grid" id="servicios">
          <div className="section-heading">
            <span className="section-kicker">Servicios</span>
            <h2>Todo lo que necesita tu negocio para crecer, organizarse y verse mejor online</h2>
            <p>
              No hacemos solo paginas lindas. Creamos herramientas digitales que
              pueden ayudarte a vender mas, atender mejor, automatizar tareas y
              dejar atras procesos manuales.
            </p>
          </div>

          <div className="cards-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="card-icon"><ServiceIcon type={service.icon} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <strong>{service.highlight}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section sectors-section">
          <div className="section-heading narrow">
            <span className="section-kicker">Rubros</span>
            <h2>Creamos paginas web para rubros concretos, no plantillas genericas</h2>
            <p>
              Si ofreces un servicio, vendes productos o necesitas mostrar tu
              marca con seriedad, podemos construir una web pensada para tu
              rubro. Y si ademas necesitas gestion interna, reservas,
              automatizaciones o seguimiento de clientes, tambien podemos
              desarrollarlo.
            </p>
            <p>
              Algunos ejemplos frecuentes son webs para odontologos, estudios,
              clinicas, inmobiliarias, tiendas y marcas que necesitan captar
              consultas, vender o mostrar mejor su propuesta.
            </p>
          </div>

          <div className="industries-cloud">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </section>

        <section className="section portfolio-section" id="proyectos">
          <div className="section-heading">
            <span className="section-kicker">Portafolio</span>
            <h2>La gente compra por lo que ve, por eso mostramos nivel</h2>
            <p>
              Aunque una marca recien empiece, su web puede verse como una marca
              grande. Estos proyectos conceptuales estan armados para demostrar
              diseno, estrategia y criterio comercial.
            </p>
          </div>

          <div className="carousel-shell">
            <div className="carousel-actions" aria-label="Controles de portafolio">
              <button
                className="carousel-button"
                type="button"
                aria-label="Ver proyecto anterior"
                onClick={() => scrollCarousel(portfolioRef, -1)}
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                className="carousel-button"
                type="button"
                aria-label="Ver proyecto siguiente"
                onClick={() => scrollCarousel(portfolioRef, 1)}
              >
                <ArrowIcon direction="right" />
              </button>
            </div>

            <div className="portfolio-grid" ref={portfolioRef}>
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-visual">
                  <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
                </div>
                <div className="project-copy">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <strong>{project.result}</strong>
                </div>
              </article>
            ))}
            </div>
          </div>
        </section>

        <section className="section split-section" id="nosotros">
          <div className="about-panel">
            <span className="section-kicker">Fundadores</span>
            <h2>Hacemos webs con criterio comercial, no solo con buen gusto</h2>
            <p>
              Somos un estudio enfocado en crear presencia digital que se vea
              fuerte, moderna y confiable. Nos gusta tomar negocios reales y
              convertirlos en experiencias digitales que impactan y tambien
              simplifican el trabajo diario.
            </p>
            <p>
              Trabajamos cada proyecto como si fuera nuestra propia vidriera:
              mensaje claro, imagen impecable y una estructura pensada para
              comunicar mejor, automatizar y ordenar procesos.
            </p>
          </div>

          <div className="founder-card">
            <div className="team-strip">
              {teamMembers.map((member) => (
                <a
                  className="team-member"
                  key={member.name}
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="team-linkedin-badge">
                    <LinkedInIcon />
                  </div>
                  <strong>{member.name}</strong>
                  <span>Ver LinkedIn</span>
                </a>
              ))}
            </div>
            <div className="founder-copy">
              <h3>Fundadores de Variable Web</h3>
              <p>
                Acompanamos a negocios locales, profesionales y marcas que
                quieren verse mejor, transmitir mas valor por lo que hacen y
                pasar de procesos manuales a sistemas mas agiles.
              </p>
            </div>
          </div>
        </section>

        <section className="section proof-section">
          <div className="section-heading">
            <span className="section-kicker">Resenas</span>
            <h2>La confianza se construye mostrando resultados y buenas experiencias</h2>
            <p>
              La mejor pagina no solo se ve bien. Hace que el cliente sienta que
              esta tratando con alguien serio.
            </p>
          </div>

          <div className="carousel-shell">
            <div className="carousel-actions" aria-label="Controles de resenas">
              <button
                className="carousel-button"
                type="button"
                aria-label="Ver resena anterior"
                onClick={() => scrollCarousel(testimonialsRef, -1)}
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                className="carousel-button"
                type="button"
                aria-label="Ver resena siguiente"
                onClick={() => scrollCarousel(testimonialsRef, 1)}
              >
                <ArrowIcon direction="right" />
              </button>
            </div>

            <div className="testimonials-grid" ref={testimonialsRef}>
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.author}>
                <p>&quot;{testimonial.quote}&quot;</p>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </article>
            ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="section-heading narrow">
            <span className="section-kicker">Como trabajamos</span>
            <h2>Un proceso simple para pasar de idea a una solucion digital que funciona</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step}>
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="contact-copy">
            <span className="section-kicker">Contacto</span>
            <h2>Contanos que necesitas y te armamos una propuesta</h2>
            <p>
              Completa el formulario para enviarnos tu consulta y, si prefieres
              una respuesta inmediata, tambien puedes escribirnos por WhatsApp.
            </p>
            <a
              className="inline-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Abrir WhatsApp con mensaje preparado
            </a>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Nombre
              <input
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="tunombre@negocio.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Negocio o rubro
              <input
                name="business"
                type="text"
                placeholder="Ej: estudio juridico, optica, tienda"
                value={formData.business}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Que necesitas
              <select name="service" value={formData.service} onChange={handleChange}>
                <option>Landing page</option>
                <option>Tienda online</option>
                <option>Web corporativa</option>
                <option>Sistema a medida</option>
                <option>No estoy seguro todavia</option>
              </select>
            </label>

            <label>
              Telefono (opcional)
              <div className="phone-row">
                <select
                  className="phone-code"
                  name="phoneCountry"
                  value={formData.phoneCountry}
                  onChange={handleChange}
                >
                  {countryCodes.map((country) => (
                    <option key={`${country.code}-${country.label}`} value={country.code}>
                      {`${country.flag} ${country.label} (${country.code})`}
                    </option>
                  ))}
                </select>

                <input
                  className="phone-number"
                  name="phoneNumber"
                  type="tel"
                  inputMode="tel"
                  placeholder="Numero de telefono"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label>
              Mensaje
              <textarea
                name="message"
                rows="5"
                placeholder="Contanos un poco sobre tu proyecto"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <button
              className="primary-button submit-button"
              type="submit"
              disabled={submitState.status === 'sending'}
            >
              {submitState.status === 'sending' ? 'Enviando...' : 'Enviar consulta'}
            </button>

            <span className={`form-status ${submitState.status}`}>
              {submitState.message}
            </span>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Variable Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
