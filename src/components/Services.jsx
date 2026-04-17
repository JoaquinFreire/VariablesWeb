import { useState } from 'react'
import { services } from '../data/services'
import { ServiceIcon } from './icons/ServiceIcon'
import { ServiceVisual } from './ServiceVisual'

function CheckIcon() {
  return (
    <svg className="svc-feature-check" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z" />
    </svg>
  )
}

export function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section className="section" id="servicios">
      <div className="section-heading">
        <span className="section-kicker">Servicios</span>
        <h2>¿Qué podemos hacer por tu negocio?</h2>
        <p>
          Elegí el servicio que mejor se adapta a lo que necesitás
          y mirá cómo lo resolvemos.
        </p>
      </div>

      {/* Tabs selector */}
      <div className="svc-tabs" role="tablist" aria-label="Servicios">
        {services.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={active === i}
            aria-controls={`svc-panel-${s.id}`}
            className={`svc-tab ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <div className="svc-tab-icon">
              <ServiceIcon type={s.icon} />
            </div>
            <span>{s.title}</span>
          </button>
        ))}
      </div>

      {/* Panel activo */}
      <div
        id={`svc-panel-${current.id}`}
        role="tabpanel"
        className="svc-panel"
      >
        <div className="svc-panel-copy">
          <h3>{current.tagline}</h3>
          <p>{current.description}</p>
          <ul className="svc-features">
            {current.features.map((f) => (
              <li key={f}>
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a className="primary-button svc-cta" href="#contacto">
            Quiero un {current.title.toLowerCase()}
          </a>
        </div>

        <div className="svc-panel-visual">
          <ServiceVisual type={current.visual} />
        </div>
      </div>
    </section>
  )
}
