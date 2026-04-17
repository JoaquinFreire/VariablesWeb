import { WhatsAppIcon } from './icons/WhatsAppIcon'
import { useContactForm } from '../hooks/useContactForm'
import { SuccessModal } from './SuccessModal'

const TRUST_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z"/></svg>
    ),
    text: 'Respondemos en menos de 24 hs',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z"/></svg>
    ),
    text: 'Propuesta clara, sin letra chica',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Z"/></svg>
    ),
    text: 'Primera consulta gratuita',
  },
]

export function Contact() {
  const {
    formData,
    fieldErrors,
    submitState,
    showSuccessModal,
    whatsappUrl,
    countryCodes,
    handleChange,
    onSubmit,
    closeModal,
  } = useContactForm()

  return (
    <>
      {showSuccessModal && <SuccessModal onClose={closeModal} />}
      <section className="section contact-section" id="contacto">

        <div className="contact-left">
          <span className="section-kicker">Contacto</span>
          <h2>¿Tenés un proyecto en mente?</h2>
          <p>
            Contanos en qué estás trabajando y te armamos una propuesta
            concreta. Sin vueltas, sin compromiso.
          </p>

          <ul className="contact-trust">
            {TRUST_ITEMS.map((item) => (
              <li key={item.text}>
                <span className="contact-trust-icon">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>

          <a
            className="contact-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            Escribir por WhatsApp
          </a>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={onSubmit} noValidate>

            <div className="form-row">
              <label htmlFor="name">
                <span className="form-label-text">Nombre</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                  required
                />
                {fieldErrors.name && (
                  <span id="name-error" className="field-error" role="alert">
                    {fieldErrors.name}
                  </span>
                )}
              </label>

              <label htmlFor="email">
                <span className="form-label-text">Email</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tunombre@negocio.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  required
                />
                {fieldErrors.email && (
                  <span id="email-error" className="field-error" role="alert">
                    {fieldErrors.email}
                  </span>
                )}
              </label>
            </div>

            <div className="form-row">
              <label htmlFor="business">
                <span className="form-label-text">Negocio o rubro</span>
                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Ej: clínica dental, tienda de ropa"
                  value={formData.business}
                  onChange={handleChange}
                  aria-invalid={!!fieldErrors.business}
                  aria-describedby={fieldErrors.business ? 'business-error' : undefined}
                  required
                />
                {fieldErrors.business && (
                  <span id="business-error" className="field-error" role="alert">
                    {fieldErrors.business}
                  </span>
                )}
              </label>

              <label htmlFor="service">
                <span className="form-label-text">¿Qué necesitás?</span>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option>Landing page</option>
                  <option>Tienda online</option>
                  <option>Web corporativa</option>
                  <option>Sistema a medida</option>
                  <option>No sé todavía</option>
                </select>
              </label>
            </div>

            <label htmlFor="message">
              <span className="form-label-text">Contanos tu proyecto</span>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="¿Qué querés lograr? ¿Tenés web actualmente? ¿Cuál es tu plazo?"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!fieldErrors.message}
                aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                required
              />
              {fieldErrors.message && (
                <span id="message-error" className="field-error" role="alert">
                  {fieldErrors.message}
                </span>
              )}
            </label>

            <label htmlFor="phoneNumber" className="label-optional">
              <span className="form-label-text">
                Teléfono
                <span className="form-optional">opcional</span>
              </span>
              <div className="phone-row">
                <select
                  className="phone-code"
                  id="phoneCountry"
                  name="phoneCountry"
                  value={formData.phoneCountry}
                  onChange={handleChange}
                  aria-label="Código de país"
                >
                  {countryCodes.map((country) => (
                    <option key={`${country.code}-${country.label}`} value={country.code}>
                      {`${country.flag} ${country.label} (${country.code})`}
                    </option>
                  ))}
                </select>
                <input
                  className="phone-number"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  inputMode="tel"
                  placeholder="Número de teléfono"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </label>

            <button
              className="primary-button submit-button"
              type="submit"
              disabled={submitState.status === 'sending'}
            >
              {submitState.status === 'sending' ? (
                <>
                  <span className="submit-spinner" aria-hidden="true" />
                  Enviando...
                </>
              ) : (
                'Enviar consulta →'
              )}
            </button>

            {submitState.message && (
              <span
                className={`form-status ${submitState.status}`}
                role={submitState.status === 'error' ? 'alert' : undefined}
              >
                {submitState.message}
              </span>
            )}
          </form>
        </div>

      </section>
    </>
  )
}
