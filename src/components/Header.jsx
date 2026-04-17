import { LogoMark } from './icons/LogoMark'

function getHomeSectionHref(isBlogPage, sectionId) {
  return isBlogPage ? `/#${sectionId}` : `#${sectionId}`
}

export function Header({ isBlogPage, isMobileNavOpen, onToggleNav, onNavClose }) {
  const homeHref = isBlogPage ? '/' : '#top'
  const contactHref = getHomeSectionHref(isBlogPage, 'contacto')

  return (
    <header className="topbar">
      <div className="topbar-surface">
        <LogoMark href={homeHref} />

        <button
          className={`nav-toggle ${isMobileNavOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={isMobileNavOpen}
          aria-controls="primary-navigation"
          aria-label={isMobileNavOpen ? 'Cerrar menu principal' : 'Abrir menu principal'}
          onClick={onToggleNav}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav
          className={`nav ${isMobileNavOpen ? 'is-open' : ''}`}
          id="primary-navigation"
          aria-label="Navegacion principal"
        >
          <div className="nav-links">
            <a href={getHomeSectionHref(isBlogPage, 'servicios')} onClick={onNavClose}>Servicios</a>
            <a href={getHomeSectionHref(isBlogPage, 'proyectos')} onClick={onNavClose}>Proyectos</a>
            <a href={getHomeSectionHref(isBlogPage, 'nosotros')} onClick={onNavClose}>Nosotros</a>
            <a href={contactHref} onClick={onNavClose}>Contacto</a>
            <a href="/blog" onClick={onNavClose}>Blog</a>
            <a className="nav-cta nav-cta-mobile" href={contactHref} onClick={onNavClose}>
              Quiero mi web →
            </a>
          </div>
        </nav>

        <a className="nav-cta" href={contactHref} onClick={onNavClose}>
          Quiero mi web →
        </a>
      </div>
    </header>
  )
}
