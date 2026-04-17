import { teamMembers } from '../data/team'
import { LinkedInIcon } from './icons/LinkedInIcon'

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z"/></svg>
    ),
    title: 'Sin intermediarios',
    desc: 'Hablás directo con quien diseña y construye tu proyecto.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-7 14-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9Z"/></svg>
    ),
    title: 'Proceso transparente',
    desc: 'Cada paso acordado por escrito, sin sorpresas ni costos ocultos.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z"/></svg>
    ),
    title: 'Código propio',
    desc: 'Todo desarrollado por nosotros. Sin plantillas genéricas ni dependencias innecesarias.',
  },
]

export function About() {
  return (
    <section className="section about-section" id="nosotros">

      <div className="about-intro">
        <div className="about-intro-text">
          <span className="section-kicker">Nosotros</span>
          <h2>Tres personas reales.<br />Un solo objetivo.</h2>
          <p>
            Somos Variable Web — un equipo pequeño y enfocado en diseño,
            desarrollo y estrategia digital. No tercerizamos, no usamos
            plantillas genéricas y no te dejamos colgado después del lanzamiento.
          </p>
          <p>
            Trabajamos con negocios y profesionales que quieren una
            presencia digital que comunique bien, se vea profesional
            y genere resultados concretos.
          </p>
        </div>

        <div className="about-values">
          {VALUES.map((v, i) => (
            <div className="about-value" key={v.title} style={{ '--delay': `${i * 100}ms` }}>
              <div className="about-value-icon">{v.icon}</div>
              <div className="about-value-text">
                <strong>{v.title}</strong>
                <span>{v.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-team">
        <div className="about-team-header">
          <h3>El equipo</h3>
          <p>Conocé a quienes van a trabajar en tu proyecto.</p>
        </div>

        <div className="team-cards">
          {teamMembers.map((member) => (
            <a
              className="team-card"
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver perfil de ${member.name} en LinkedIn`}
            >
              <div
                className="team-card-avatar"
                style={{ '--av-bg': member.color, '--av-color': member.textColor }}
              >
                {member.initials}
              </div>
              <div className="team-card-info">
                <strong>{member.name}</strong>
              </div>
              <div className="team-card-linkedin">
                <LinkedInIcon />
                <span>LinkedIn</span>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}
