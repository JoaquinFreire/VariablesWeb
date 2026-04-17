import { steps } from '../data/constants'
import { StepIcon } from './icons/StepIcon'

export function Process() {
  return (
    <section className="section process-section">
      <div className="section-heading narrow">
        <span className="section-kicker">Cómo trabajamos</span>
        <h2>
          Un proceso claro,{' '}
          <span className="h2-accent">paso a paso</span>
        </h2>
        <p>
          Para que sepas exactamente cómo trabajamos y qué esperar
          en cada etapa.
        </p>
      </div>

      <div className="process-timeline">
        {steps.map((step, index) => (
          <div className="timeline-step" key={step.label}>
            <div className="timeline-icon-wrap">
              <div className="timeline-icon">
                <StepIcon index={index} />
              </div>
              {index < steps.length - 1 && (
                <div className="timeline-connector" aria-hidden="true" />
              )}
            </div>
            <span className="timeline-label">PASO 0{index + 1}</span>
            <strong className="timeline-title">{step.label}</strong>
            <p className="timeline-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
