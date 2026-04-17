import { industries } from '../data/industries'
import { IndustryIcon } from './icons/IndustryIcon'

export function Sectors() {
  return (
    <section className="section sectors-section">
      <div className="section-heading narrow">
        <span className="section-kicker">Rubros</span>
        <h2>Trabajamos con todo tipo de negocios</h2>
        <p>
          Si tenés un negocio o ejercés una profesión, podemos
          construir algo que funcione para tu rubro específico.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((industry, i) => (
          <div
            className="industry-card"
            key={industry.label}
            style={{
              '--industry-color': industry.color,
              '--delay': `${i * 60}ms`,
            }}
          >
            <div className="industry-icon-wrap">
              <IndustryIcon type={industry.icon} />
            </div>
            <span>{industry.label}</span>
          </div>
        ))}
      </div>

      <p className="industries-footer">
        ¿No ves tu rubro? <a href="#contacto">Escribinos igual</a>, seguramente podemos ayudarte.
      </p>
    </section>
  )
}
