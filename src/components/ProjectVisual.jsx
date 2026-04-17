function BrowserShell({ url, children, dark = false }) {
  return (
    <div className={`pv-shell ${dark ? 'pv-shell--dark' : ''}`}>
      <div className="pv-topbar">
        <div className="pv-dots">
          <span /><span /><span />
        </div>
        <div className="pv-url">{url}</div>
      </div>
      <div className="pv-body">{children}</div>
    </div>
  )
}

/* ── DENTAL ─────────────────────────────────── */
function VisualDental() {
  return (
    <BrowserShell url="drsilva.com.ar">
      <div className="pv-dental">
        <nav className="pv-dn-nav">
          <div className="pv-dn-logo">Dr. Silva</div>
          <div className="pv-dn-cta">Reservar turno</div>
        </nav>
        <div className="pv-dn-hero">
          <div className="pv-dn-badge">Odontología estética</div>
          <div className="pv-dn-h1" />
          <div className="pv-dn-h1 pv-dn-h1--s" />
          <div className="pv-dn-sub" />
          <div className="pv-dn-btn">Pedir turno online →</div>
        </div>
        <div className="pv-dn-cards">
          {['Blanqueamiento', 'Ortodoncia', 'Implantes'].map(s => (
            <div key={s} className="pv-dn-card">
              <div className="pv-dn-card-icon" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserShell>
  )
}

/* ── HABITAT ─────────────────────────────────── */
function VisualHabitat() {
  return (
    <BrowserShell url="habitatestudio.com" dark>
      <div className="pv-habitat">
        <nav className="pv-hb-nav">
          <div className="pv-hb-logo">HÁBITAT</div>
          <div className="pv-hb-links"><span/><span/><span/></div>
        </nav>
        <div className="pv-hb-hero">
          <div className="pv-hb-text">
            <div className="pv-hb-tag">Arquitectura & Diseño</div>
            <div className="pv-hb-h1" />
            <div className="pv-hb-h1 short" />
            <div className="pv-hb-btn">Ver proyectos</div>
          </div>
          <div className="pv-hb-img" />
        </div>
        <div className="pv-hb-grid">
          {[1,2,3].map(i => <div key={i} className="pv-hb-thumb" style={{'--i': i}} />)}
        </div>
      </div>
    </BrowserShell>
  )
}

/* ── AROMA ─────────────────────────────────── */
function VisualAroma() {
  return (
    <BrowserShell url="aromaancestral.com">
      <div className="pv-aroma">
        <nav className="pv-ar-nav">
          <div className="pv-ar-logo">☕ Aroma</div>
          <div className="pv-ar-cart">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM7.16 14h9.68l1.96-7H5.21l-.94-4H1v2h2.23l3.31 14H19v-2H7.42L7.16 14Z"/></svg>
            <span>2</span>
          </div>
        </nav>
        <div className="pv-ar-banner">
          <div className="pv-ar-banner-text">
            <div className="pv-ar-tag">Café de especialidad</div>
            <div className="pv-ar-h" />
            <div className="pv-ar-h short" />
            <div className="pv-ar-btn">Ver catálogo</div>
          </div>
          <div className="pv-ar-beans" aria-hidden="true">☕</div>
        </div>
        <div className="pv-ar-products">
          {['Etiopía', 'Colombia', 'Brasil'].map((n, i) => (
            <div key={n} className="pv-ar-prod" style={{'--shade': `${20 + i * 12}%`}}>
              <div className="pv-ar-img" />
              <span>{n}</span>
              <strong>${(i + 1) * 1800}</strong>
            </div>
          ))}
        </div>
      </div>
    </BrowserShell>
  )
}

/* ── LOGITRACK ─────────────────────────────────── */
function VisualLogitrack() {
  return (
    <BrowserShell url="app.logitrack.com" dark>
      <div className="pv-logi">
        <div className="pv-logi-sidebar">
          <div className="pv-logi-brand">LT</div>
          {['Panel', 'Flota', 'Pedidos', 'Rutas', 'Reportes'].map((item, i) => (
            <div key={item} className={`pv-logi-item ${i === 0 ? 'active' : ''}`}>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="pv-logi-main">
          <div className="pv-logi-stats">
            {[['48', 'Vehículos'], ['127', 'Pedidos'], ['98%', 'On time']].map(([n, l]) => (
              <div key={l} className="pv-logi-stat">
                <strong>{n}</strong><span>{l}</span>
              </div>
            ))}
          </div>
          <div className="pv-logi-map">
            <div className="pv-logi-map-label">Mapa en tiempo real</div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="pv-logi-dot" style={{
                top: `${20 + (i * 13) % 55}%`,
                left: `${15 + (i * 17) % 65}%`,
              }} />
            ))}
          </div>
        </div>
      </div>
    </BrowserShell>
  )
}

/* ── ZENFIT ─────────────────────────────────── */
function VisualZenfit() {
  return (
    <BrowserShell url="zenfit.com.ar" dark>
      <div className="pv-zenfit">
        <nav className="pv-zf-nav">
          <div className="pv-zf-logo">⚡ ZenFit</div>
          <div className="pv-zf-cta">Unirme</div>
        </nav>
        <div className="pv-zf-hero">
          <div className="pv-zf-h" />
          <div className="pv-zf-h short" />
          <div className="pv-zf-sub" />
        </div>
        <div className="pv-zf-schedule">
          <div className="pv-zf-sch-title">Clases de hoy</div>
          {[
            { cls: 'CrossFit', time: '07:00', spots: 3 },
            { cls: 'Yoga', time: '09:30', spots: 8 },
            { cls: 'Pilates', time: '18:00', spots: 1 },
          ].map(c => (
            <div key={c.cls} className="pv-zf-class">
              <div className="pv-zf-class-info">
                <strong>{c.cls}</strong>
                <span>{c.time} hs</span>
              </div>
              <div className={`pv-zf-spots ${c.spots <= 2 ? 'low' : ''}`}>
                {c.spots} {c.spots === 1 ? 'lugar' : 'lugares'}
              </div>
              <div className="pv-zf-reserve">Reservar</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserShell>
  )
}

/* ── OSTERIA ─────────────────────────────────── */
function VisualOsteria() {
  return (
    <BrowserShell url="osteriaroma.com" dark>
      <div className="pv-osteria">
        <nav className="pv-os-nav">
          <div className="pv-os-logo">OSTERIA ROMA</div>
          <div className="pv-os-links"><span/><span/></div>
        </nav>
        <div className="pv-os-hero">
          <div className="pv-os-tag">Cocina italiana auténtica</div>
          <div className="pv-os-h" />
          <div className="pv-os-h short" />
          <div className="pv-os-actions">
            <div className="pv-os-btn primary">Reservar mesa</div>
            <div className="pv-os-btn ghost">Ver carta</div>
          </div>
        </div>
        <div className="pv-os-dishes">
          {['Pasta', 'Pizza', 'Tiramisú', 'Risotto'].map((d, i) => (
            <div key={d} className="pv-os-dish" style={{'--i': i}}>
              <div className="pv-os-dish-img" />
              <span>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserShell>
  )
}

/* ── NEXO ─────────────────────────────────── */
function VisualNexo() {
  return (
    <BrowserShell url="nexocapital.com">
      <div className="pv-nexo">
        <nav className="pv-nx-nav">
          <div className="pv-nx-logo">NEXO <span>CAPITAL</span></div>
          <div className="pv-nx-cta">Agendar consulta</div>
        </nav>
        <div className="pv-nx-hero">
          <div className="pv-nx-tag">Consultoría financiera</div>
          <div className="pv-nx-h" />
          <div className="pv-nx-h short" />
          <div className="pv-nx-sub" />
          <div className="pv-nx-sub short" />
        </div>
        <div className="pv-nx-metrics">
          {[['$2.4B', 'Gestionados'], ['340+', 'Clientes'], ['12 años', 'Trayectoria']].map(([n, l]) => (
            <div key={l} className="pv-nx-metric">
              <strong>{n}</strong><span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserShell>
  )
}

/* ── ZEN SPA ─────────────────────────────────── */
function VisualZen() {
  return (
    <BrowserShell url="almazen.com">
      <div className="pv-zen">
        <nav className="pv-zn-nav">
          <div className="pv-zn-logo">✦ Alma Zen</div>
          <div className="pv-zn-cta">Reservar</div>
        </nav>
        <div className="pv-zn-hero">
          <div className="pv-zn-h" />
          <div className="pv-zn-h short" />
          <div className="pv-zn-sub" />
          <div className="pv-zn-btn">Elegir servicio →</div>
        </div>
        <div className="pv-zn-services">
          {['Masajes', 'Facial', 'Aromaterapia', 'Meditación'].map((s, i) => (
            <div key={s} className="pv-zn-chip" style={{'--i': i}}>
              {s}
            </div>
          ))}
        </div>
        <div className="pv-zn-gallery">
          {[1,2,3].map(i => <div key={i} className="pv-zn-img" style={{'--i': i}} />)}
        </div>
      </div>
    </BrowserShell>
  )
}

const VISUALS = {
  dental:    VisualDental,
  habitat:   VisualHabitat,
  aroma:     VisualAroma,
  logitrack: VisualLogitrack,
  zenfit:    VisualZenfit,
  osteria:   VisualOsteria,
  nexo:      VisualNexo,
  zen:       VisualZen,
}

export function ProjectVisual({ type }) {
  const Component = VISUALS[type] || VisualDental
  return <Component />
}
