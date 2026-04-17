import { testimonials } from '../data/testimonials'

function StarRating() {
  return (
    <div className="testi-stars" aria-label="5 estrellas">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="section testi-section">
      <div className="section-heading narrow">
        <span className="section-kicker">Clientes</span>
        <h2>Lo que dicen los que ya dieron el paso</h2>
        <p>Negocios reales que apostaron a tener presencia profesional en la web.</p>
      </div>

      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <article
            className="testi-card"
            key={t.author}
            style={{ '--delay': `${i * 80}ms` }}
          >
            <div className="testi-quote-icon" aria-hidden="true">"</div>
            <StarRating />
            <p className="testi-quote">{t.quote}</p>
            <div className="testi-author">
              <div
                className="testi-avatar"
                style={{ '--av-bg': t.color, '--av-color': t.textColor }}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div className="testi-meta">
                <strong>{t.author}</strong>
                <span>{t.role} · {t.company}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
