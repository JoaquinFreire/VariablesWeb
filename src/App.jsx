import { useRef, useState } from 'react'
import horacioFoto from './img/horaciofoto.webp'
import joaquinFoto from './img/joaquinfoto.webp'
import tizianoFoto from './img/tizianofoto.webp'
import './App.css'

const services = [
  {
    title: 'Landing pages',
    description:
      'Paginas pensadas para vender un servicio, captar consultas y convertir visitas en clientes.',
    highlight: 'Ideal para campanas, lanzamientos y negocios que quieren arrancar rapido.',
  },
  {
    title: 'Tiendas online',
    description:
      'E-commerce con catalogo, carrito, medios de pago y una experiencia de compra pensada para cerrar ventas.',
    highlight: 'Perfecto para marcas que quieren vender todos los dias sin depender del local.',
  },
  {
    title: 'Webs corporativas',
    description:
      'Sitios profesionales para estudios, consultorios y empresas que necesitan verse serios y generar confianza.',
    highlight: 'Muy buscadas por abogados, odontologos, constructoras y servicios locales.',
  },
  {
    title: 'Sistemas a medida',
    description:
      'Paneles, reservas, gestion interna y herramientas digitales creadas para ahorrar tiempo y ordenar procesos.',
    highlight: 'Cuando una plantilla no alcanza, disenamos algo hecho a tu forma de trabajar.',
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
    name: 'Optica Prisma',
    type: 'Landing premium',
    summary:
      'Una marca ficticia de optica con reservas de turnos, catalogo destacado y una identidad visual elegante.',
    result: '+58% de consultas simuladas en pruebas de UX',
  },
  {
    name: 'Estudio Roca & Asociados',
    type: 'Web corporativa',
    summary:
      'Sitio para abogados con enfoque en confianza, especialidades claras y formularios de contacto de alta conversion.',
    result: 'Imagen mas seria y profesional desde el primer vistazo',
  },
  {
    name: 'Nativa Shop',
    type: 'Tienda online',
    summary:
      'E-commerce conceptual para una marca de indumentaria con fichas limpias, carrito simple y foco en producto.',
    result: 'Experiencia de compra rapida, moderna y lista para escalar',
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
      'La pagina quedo hermosa, pero lo mejor fue que pensaron todo para vender. El boton de WhatsApp no para de entrar.',
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
  'Escuchamos tu negocio y definimos la propuesta que mas vende.',
  'Disenamos una experiencia visual que se vea profesional y memorable.',
  'Lanzamos la web lista para captar consultas, ventas o reservas.',
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
    name: 'Tiiziano Mina',
    role: 'Desarrollador',
    image: tizianoFoto,
  },
  {
    name: 'Freire Joaquin',
    role: 'Analista',
    image: joaquinFoto,
  },
  {
    name: 'Avila Horacio',
    role: 'Administrador',
    image: horacioFoto,
  },
]

const countryCodes = [
  { flag: '🇦🇷', label: 'Argentina', code: '+54' },
  { flag: '🇨🇱', label: 'Chile', code: '+56' },
  { flag: '🇺🇾', label: 'Uruguay', code: '+598' },
  { flag: '🇵🇾', label: 'Paraguay', code: '+595' },
  { flag: '🇧🇴', label: 'Bolivia', code: '+591' },
  { flag: '🇵🇪', label: 'Peru', code: '+51' },
  { flag: '🇧🇷', label: 'Brasil', code: '+55' },
  { flag: '🇲🇽', label: 'Mexico', code: '+52' },
  { flag: '🇪🇸', label: 'Espana', code: '+34' },
  { flag: '🇺🇸', label: 'Estados Unidos', code: '+1' },
]

const whatsappNumber = '5493513117202'
const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

function LogoMark() {
  return (
    <a className="logo" href="#top" aria-label="Variables Web">
      <div className="logo-badge" aria-hidden="true">
        <svg viewBox="0 0 88 88" role="img">
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
        <strong>Variables Web</strong>
        <small>Diseno web que convierte visitas en clientes</small>
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
      'Hola, vi la web de Variables Web y quiero recibir asesoramiento.',
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
    submission.append('subject', 'Nueva consulta desde Variables Web')
    submission.append('from_name', 'Variables Web')
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
      {showSuccessModal ? (
        <div className="success-modal-backdrop" role="presentation">
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
              tu web o sistema.
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
            onClick={() => setIsMobileNavOpen((current) => !current)}
          >
            <span className="nav-toggle-label">Menu</span>
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
            Cotizar mi web
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">
              Diseno web, sistemas, automatizacion y presencia digital para negocios
            </div>
            <h1>Creamos webs y sistemas para vender mejor y trabajar mejor.</h1>
            <p className="hero-lead">
              Disenamos paginas para captar clientes, pero tambien sistemas web
              para organizar turnos, pacientes, clientes, ventas y procesos
              internos. Si hoy trabajas con papel, WhatsApp desordenado o tareas
              manuales, te ayudamos a llevarlo a digital.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#contacto">
                Cotizar mi web
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
                <span>Sirve tanto para vender como para gestionar mejor.</span>
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
                  Una solucion digital pensada para atraer clientes o para
                  ordenar por dentro como funciona tu negocio.
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
            <h2>Todo lo que necesita tu negocio para vender mejor online</h2>
            <p>
              No hacemos solo paginas lindas. Creamos herramientas digitales que
              pueden ayudarte a vender mas, atender mejor y dejar atras procesos
              manuales.
            </p>
          </div>

          <div className="cards-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="card-icon"></div>
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
            <h2>Podemos crear paginas para muchisimos tipos de negocio</h2>
            <p>
              Si vendes un servicio, un producto o necesitas mostrar tu marca con
              seriedad, podemos construir una web pensada para tu rubro. Y si
              ademas necesitas gestion interna, reservas o seguimiento de
              clientes, tambien podemos desarrollarlo.
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
                onClick={() => scrollCarousel(portfolioRef, -1)}
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                className="carousel-button"
                type="button"
                onClick={() => scrollCarousel(portfolioRef, 1)}
              >
                <ArrowIcon direction="right" />
              </button>
            </div>

            <div className="portfolio-grid" ref={portfolioRef}>
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className={`project-visual visual-${index + 1}`}>
                  <div className="screen-bar"></div>
                  <div className="screen-layout">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
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
            <span className="section-kicker">Nosotros</span>
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
              vender, automatizar y ordenar procesos.
            </p>
          </div>

          <div className="founder-card">
            <div className="team-strip">
              {teamMembers.map((member) => (
                <article className="team-member" key={member.name}>
                  <div className="team-photo">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </article>
              ))}
            </div>
            <div className="founder-copy">
              <h3>Tu equipo digital para vender con mas presencia</h3>
              <p>
                Acompanamos a negocios locales, profesionales y marcas que
                quieren verse mejor, cobrar mas valor por lo que hacen y pasar
                de procesos manuales a sistemas mas agiles.
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
                onClick={() => scrollCarousel(testimonialsRef, -1)}
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                className="carousel-button"
                type="button"
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
            <h2>Un proceso simple para pasar de idea a una web que impresiona</h2>
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
            <h2>Contanos que queres vender y te armamos una propuesta</h2>
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
        <p>&copy; 2026 Variables Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
