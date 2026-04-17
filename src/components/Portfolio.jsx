import { useRef } from 'react'
import { projects } from '../data/projects'
import { ArrowIcon } from './icons/ArrowIcon'
import { ProjectVisual } from './ProjectVisual'

export function Portfolio() {
  const portfolioRef = useRef(null)

  const scrollCarousel = (direction) => {
    if (!portfolioRef.current) return
    const cardWidth = portfolioRef.current.querySelector('.project-card')?.offsetWidth ?? 0
    const gap = 16
    const amount = (cardWidth + gap) * 2 * direction
    portfolioRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="section portfolio-section" id="proyectos">
      <div className="section-heading">
        <span className="section-kicker">Proyectos</span>
        <h2>Trabajo real, resultados reales</h2>
        <p>
          Proyectos conceptuales que muestran diseño, estrategia
          y criterio comercial en cada detalle.
        </p>
      </div>

      <div className="carousel-shell">
        <div className="carousel-actions" aria-label="Controles de proyectos">
          <button
            className="carousel-button"
            type="button"
            aria-label="Ver proyecto anterior"
            onClick={() => scrollCarousel(-1)}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            className="carousel-button"
            type="button"
            aria-label="Ver proyecto siguiente"
            onClick={() => scrollCarousel(1)}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        <div className="portfolio-grid" ref={portfolioRef}>
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-visual">
                <ProjectVisual type={project.visual} />
              </div>
              <div className="project-copy">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
