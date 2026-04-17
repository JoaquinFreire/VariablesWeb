import { createPortal } from 'react-dom'
import { CheckIcon } from './icons/CheckIcon'

export function SuccessModal({ onClose }) {
  return createPortal(
    <div className="success-modal-backdrop">
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
          tu web, sistema o automatizacion.
        </p>
        <button
          className="primary-button success-close"
          type="button"
          onClick={onClose}
        >
          Perfecto
        </button>
      </div>
    </div>,
    document.body
  )
}
