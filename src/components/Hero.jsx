import { WhatsAppIcon } from './icons/WhatsAppIcon'
import { PhaseIcon } from './icons/PhaseIcon'
import { heroPhases } from '../data/constants'

export function Hero({ whatsappUrl }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow">
            Desarrollo web para negocios reales
          </div>
          <h1>
            Webs que venden.{' '}
            <span className="h1-accent">Sistemas que ordenan.</span>
          </h1>
          <p className="hero-lead">
            Diseñamos páginas web, tiendas online y sistemas a medida
            para negocios que quieren verse profesionales y crecer.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contacto">
              Quiero mi web
            </a>
            <a
              className="contact-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Hablar por WhatsApp
            </a>
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
              <h2>Tu negocio, en serio.</h2>
              <p>
                Una web que comunica bien lo que hacés
                y convierte visitas en clientes.
              </p>
              <div className="mock-actions">
                <span className="mock-primary">Empezar ahora</span>
                <span className="mock-secondary">Ver proyectos</span>
              </div>
            </div>
          </div>

          <div className="browser-card floating-card top-card">
            <p>Nuevo mensaje</p>
            <strong>Hola, vi tu web y quiero cotizar</strong>
          </div>

          <div className="browser-card floating-card bottom-card">
            <p>Estado del proyecto</p>
            <strong>En producción — listo para lanzar</strong>
          </div>
        </div>

        {/* Flujo de fases — ocupa todo el ancho */}
        <div className="hero-phases">
          {heroPhases.map((phase, index) => (
            <div key={phase.label} className="hero-phases-item-wrapper">
              <div className="hero-phase-item">
                <div className="hero-phase-icon">
                  <PhaseIcon type={phase.icon} />
                </div>
                <span className="hero-phase-label">{phase.label}</span>
                <span className="hero-phase-desc">{phase.desc}</span>
              </div>
              {index < heroPhases.length - 1 && (
                <div className="hero-phase-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 17l5-5-5-5v10Z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </>
  )
}
