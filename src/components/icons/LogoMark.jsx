export function LogoMark({ href = '#top' }) {
  return (
    <a className="logo" href={href} aria-label="Variable Web - inicio">
      <div className="logo-badge" aria-hidden="true">
        <span className="logo-brace">{'{'}</span>
        <span className="logo-v">v</span>
        <span className="logo-brace">{'}'}</span>
      </div>
      <span className="logo-copy">
        <strong>Variable Web</strong>
        <small>Diseño · Desarrollo · Resultados</small>
      </span>
    </a>
  )
}
