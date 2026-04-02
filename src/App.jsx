import { useState } from 'react'
import './App.css'

const services = [
  {
    title: 'Landing pages',
    description:
      'Paginas pensadas para vender un servicio, captar consultas y convertir visitas en clientes.',
    highlight: 'Ideal para campañas, lanzamientos y negocios que quieren arrancar rapido.',
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
    highlight: 'Cuando una plantilla no alcanza, diseñamos algo hecho a tu forma de trabajar.',
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
      'Nos guiaron con textos, estructura y diseño. No fue solo una web, fue ordenar la forma en que mostramos el negocio.',
    author: 'Lucia Benitez',
    role: 'Centro odontologico',
  },
]

const steps = [
  'Escuchamos tu negocio y definimos la propuesta que mas vende.',
  'Diseñamos una experiencia visual que se vea profesional y memorable.',
  'Lanzamos la web lista para captar consultas, ventas o reservas.',
]

function LogoMark() {
  return (
    <div className="logo" aria-label="Variables Web">
      <svg viewBox="0 0 180 64" role="img" aria-hidden="true">
        <rect width="180" height="64" rx="20" fill="#ffffff" />
        <text x="32" y="44" className="logo-brace">
          {'{'}
        </text>
        <text x="79" y="43" className="logo-v">
          v
        </text>
        <text x="116" y="44" className="logo-brace">
          {'}'}
        </text>
      </svg>
      <span>Variables Web</span>
    </div>
  )
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    service: 'Landing page',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const whatsappMessage = encodeURIComponent(
    [
      'Hola, quiero cotizar una web.',
      `Nombre: ${formData.name || 'No indicado'}`,
      `Negocio: ${formData.business || 'No indicado'}`,
      `Servicio: ${formData.service}`,
      `Detalle: ${formData.message || 'Quiero mas informacion sobre tiempos y precios.'}`,
    ].join('\n')
  )

  return (
    <div className="page-shell">
      <header className="topbar">
        <LogoMark />

        <nav className="nav">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="nav-cta" href="#contacto">
          Cotizar mi web
        </a>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">
              Diseno web, tiendas online, sistemas y presencia digital que vende
            </div>
            <h1>Creamos sitios web que atraen mas clientes a tu negocio.</h1>
            <p className="hero-lead">
              Diseñamos paginas impactantes, profesionales y listas para convertir
              visitas en consultas, ventas o reservas. Si tu negocio necesita
              verse fuerte en internet, lo construimos para eso.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#contacto">
                Cotizar mi web
              </a>
              <a
                className="secondary-button"
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <div className="hero-metrics">
              <article>
                <strong>Paginas claras</strong>
                <span>Tu propuesta se entiende en segundos.</span>
              </article>
              <article>
                <strong>Diseno vendedor</strong>
                <span>Estetica premium con foco total en conversion.</span>
              </article>
              <article>
                <strong>Hecho a medida</strong>
                <span>Desde una landing hasta sistemas para operar mejor.</span>
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
                  Una web pensada para destacar frente a la competencia y lograr
                  que mas personas te escriban.
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
          <span>Landing pages</span>
          <span>Tiendas online</span>
          <span>Webs corporativas</span>
          <span>Sistemas a medida</span>
          <span>Reservas y automatizacion</span>
        </section>

        <section className="section section-grid" id="servicios">
          <div className="section-heading">
            <span className="section-kicker">Servicios</span>
            <h2>Todo lo que necesita tu negocio para vender mejor online</h2>
            <p>
              No hacemos paginas por hacer. Diseñamos piezas digitales que
              generan confianza, explican lo que ofreces y empujan a la accion.
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
              seriedad, podemos construir una web pensada para tu rubro.
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
              diseño, estrategia y criterio comercial.
            </p>
          </div>

          <div className="portfolio-grid">
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
        </section>

        <section className="section split-section" id="nosotros">
          <div className="about-panel">
            <span className="section-kicker">Nosotros</span>
            <h2>Hacemos webs con criterio comercial, no solo con buen gusto</h2>
            <p>
              Somos un estudio enfocado en crear presencia digital que se vea
              fuerte, moderna y confiable. Nos gusta tomar negocios reales y
              convertirlos en marcas que impactan desde la primera pantalla.
            </p>
            <p>
              Trabajamos cada proyecto como si fuera nuestra propia vidriera:
              mensaje claro, imagen impecable y una estructura pensada para
              vender.
            </p>
          </div>

          <div className="founder-card">
            <div className="founder-photo">
              <div className="founder-avatar">
                <span>{'{'}</span>
                <b>v</b>
                <span>{'}'}</span>
              </div>
            </div>
            <div className="founder-copy">
              <h3>Tu equipo digital para vender con mas presencia</h3>
              <p>
                Acompañamos a negocios locales, profesionales y marcas que
                quieren verse mejor y cobrar mas valor por lo que hacen.
              </p>
            </div>
          </div>
        </section>

        <section className="section proof-section">
          <div className="section-heading">
            <span className="section-kicker">Reseñas</span>
            <h2>La confianza se construye mostrando resultados y buenas experiencias</h2>
            <p>
              La mejor pagina no solo se ve bien. Hace que el cliente sienta que
              esta tratando con alguien serio.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.author}>
                <p>&quot;{testimonial.quote}&quot;</p>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </article>
            ))}
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
              Completa este formulario y te llevamos directo a WhatsApp con el
              mensaje listo. Asi podes cotizar rapido sin vueltas.
            </p>
            <a
              className="inline-whatsapp"
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir WhatsApp con mensaje preparado
            </a>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault()
              window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer')
            }}
          >
            <label>
              Nombre
              <input
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
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
              Mensaje
              <textarea
                name="message"
                rows="5"
                placeholder="Contanos un poco sobre tu proyecto"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>

            <button className="primary-button submit-button" type="submit">
              Agendar llamada / cotizar
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
