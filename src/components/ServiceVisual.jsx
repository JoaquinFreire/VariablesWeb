export function ServiceVisual({ type }) {
  if (type === 'landing') {
    return (
      <div className="svc-mockup svc-mockup--landing">
        <div className="svc-browser-bar">
          <span /><span /><span />
          <div className="svc-url-bar">variableweb.com/mi-negocio</div>
        </div>
        <div className="svc-mockup-body">
          <div className="svc-nav-mock">
            <div className="svc-nav-logo" />
            <div className="svc-nav-links"><span /><span /><span /></div>
            <div className="svc-nav-cta" />
          </div>
          <div className="svc-hero-mock">
            <div className="svc-eyebrow" />
            <div className="svc-h1" />
            <div className="svc-h1 svc-h1--short" />
            <div className="svc-lead" />
            <div className="svc-lead svc-lead--short" />
            <div className="svc-ctas">
              <div className="svc-btn svc-btn--primary">Contactar ahora</div>
              <div className="svc-btn svc-btn--ghost">Ver más</div>
            </div>
          </div>
          <div className="svc-metrics-mock">
            <div className="svc-metric"><span>+60%</span><p>Consultas</p></div>
            <div className="svc-metric"><span>2 sem</span><p>Entrega</p></div>
            <div className="svc-metric"><span>SEO</span><p>Incluido</p></div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'ecommerce') {
    return (
      <div className="svc-mockup svc-mockup--ecommerce">
        <div className="svc-browser-bar">
          <span /><span /><span />
          <div className="svc-url-bar">mitienda.com</div>
        </div>
        <div className="svc-mockup-body">
          <div className="svc-shop-header">
            <div className="svc-shop-logo" />
            <div className="svc-shop-search" />
            <div className="svc-shop-cart">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM7.16 14h9.68l1.96-7H5.21l-.94-4H1v2h2.23l3.31 14.03A2 2 0 0 0 7 19h12v-2H7.42L7.16 14Z"/></svg>
              <span>3</span>
            </div>
          </div>
          <div className="svc-products-grid">
            {['Producto A', 'Producto B', 'Producto C', 'Producto D'].map((p, i) => (
              <div className="svc-product-card" key={p}>
                <div className="svc-product-img" style={{ '--hue': `${20 + i * 15}deg` }} />
                <div className="svc-product-info">
                  <span>{p}</span>
                  <strong>${(i + 1) * 1500}</strong>
                  <div className="svc-add-cart">+ Agregar</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'corporate') {
    return (
      <div className="svc-mockup svc-mockup--corporate">
        <div className="svc-browser-bar">
          <span /><span /><span />
          <div className="svc-url-bar">miempresa.com</div>
        </div>
        <div className="svc-mockup-body">
          <div className="svc-corp-hero">
            <div className="svc-corp-nav"><div /><div className="svc-corp-nav-links"><span/><span/><span/></div></div>
            <div className="svc-corp-headline">
              <div className="svc-line svc-line--xl" />
              <div className="svc-line svc-line--lg" />
              <div className="svc-line svc-line--md" />
              <div className="svc-line svc-line--md" />
            </div>
          </div>
          <div className="svc-corp-sections">
            <div className="svc-corp-block">
              <div className="svc-block-icon" />
              <div className="svc-line svc-line--sm" />
              <div className="svc-line svc-line--xs" />
              <div className="svc-line svc-line--xs" />
            </div>
            <div className="svc-corp-block">
              <div className="svc-block-icon" />
              <div className="svc-line svc-line--sm" />
              <div className="svc-line svc-line--xs" />
              <div className="svc-line svc-line--xs" />
            </div>
            <div className="svc-corp-block">
              <div className="svc-block-icon" />
              <div className="svc-line svc-line--sm" />
              <div className="svc-line svc-line--xs" />
              <div className="svc-line svc-line--xs" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* system / dashboard */
  return (
    <div className="svc-mockup svc-mockup--system">
      <div className="svc-browser-bar">
        <span /><span /><span />
        <div className="svc-url-bar">app.minegocio.com</div>
      </div>
      <div className="svc-mockup-body svc-mockup-body--dashboard">
        <div className="svc-sidebar">
          <div className="svc-sidebar-logo" />
          {['Dashboard', 'Clientes', 'Stock', 'Turnos', 'Reportes'].map((item) => (
            <div className={`svc-sidebar-item ${item === 'Dashboard' ? 'is-active' : ''}`} key={item}>
              <div className="svc-sidebar-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="svc-dashboard-main">
          <div className="svc-stats-row">
            <div className="svc-stat-card"><strong>128</strong><span>Clientes</span></div>
            <div className="svc-stat-card svc-stat-card--accent"><strong>$84k</strong><span>Este mes</span></div>
            <div className="svc-stat-card"><strong>23</strong><span>Turnos hoy</span></div>
          </div>
          <div className="svc-chart-area">
            <div className="svc-chart-label">Ventas mensuales</div>
            <div className="svc-bars">
              {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="svc-bar" style={{ '--h': `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
