import {
  blogBenefits,
  blogPillars,
  blogSearchIntents,
  editorialGuides,
  featuredArticle,
} from '../data/blog'

export function Blog({ whatsappUrl }) {
  return (
    <section className="blog-page" id="top">
      <section className="section blog-hero">
        <div className="blog-hero-copy">
          <nav className="blog-breadcrumb" aria-label="Ruta de navegacion">
            <a href="/">Inicio</a>
            <span>/</span>
            <span>Blog</span>
          </nav>
          <span className="section-kicker">Blog</span>
          <h1>Ideas, guias y estrategias para mejorar tu presencia digital y vender con mas orden.</h1>
          <p className="hero-lead">
            En este espacio compartimos contenidos pensados para profesionales
            de la salud, opticas y empresas de servicios que quieren crecer con
            una web mejor planteada, procesos mas claros y una estrategia digital
            enfocada en resultados.
          </p>

          <div className="blog-hero-actions">
            <a className="primary-button" href="/#servicios">
              Ver servicios
            </a>
            <a className="secondary-button" href="/#contacto">
              Ir a contacto
            </a>
          </div>
        </div>

        <div className="blog-hero-panel">
          {blogBenefits.map((benefit) => (
            <article className="blog-benefit-card" key={benefit.title}>
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section blog-quicklinks-section">
        <div className="blog-quicklinks">
          <a className="blog-quicklink" href="/">
            Volver al inicio
          </a>
          <a className="blog-quicklink" href="/#servicios">
            Ver servicios
          </a>
          <a className="blog-quicklink" href="/#proyectos">
            Ver proyectos
          </a>
          <a className="blog-quicklink" href="/#contacto">
            Contactar
          </a>
        </div>
      </section>

      <section className="section blog-section">
        <div className="section-heading blog-heading">
          <span className="section-kicker">Temas</span>
          <h2>Que tipo de contenido vas a encontrar aca.</h2>
          <p>
            No publicamos por publicar. Cada articulo esta pensado para resolver
            dudas reales de negocio, ayudar a tomar mejores decisiones y mostrar
            como una presencia digital bien trabajada impacta en consultas, ventas
            y organizacion.
          </p>
        </div>

        <div className="blog-editorial-grid">
          {editorialGuides.map((guide) => (
            <article className="blog-editorial-card" key={guide.title}>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section blog-section">
        <div className="section-heading blog-heading">
          <span className="section-kicker">Intencion de busqueda</span>
          <h2>Consultas que ya estan haciendo tus potenciales clientes en Google.</h2>
          <p>
            Estas lineas editoriales parten de problemas concretos: conseguir mas
            pacientes, ordenar turnos, mejorar la imagen profesional, vender mas
            o dejar de perder oportunidades por una web floja.
          </p>
        </div>

        <div className="blog-intents">
          {blogSearchIntents.map((intent) => (
            <article className="blog-intent-card" key={intent.title}>
              <span className="blog-intent-title">{intent.title}</span>
              <p>{intent.description}</p>
              <ul className="blog-keyword-list">
                {intent.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section blog-section">
        <div className="section-heading blog-heading">
          <span className="section-kicker">Pilares</span>
          <h2>Primeros articulos para construir autoridad.</h2>
          <p>
            Estos temas nos permiten hablar de rentabilidad, conversion, SEO local,
            sistemas y posicionamiento con foco en salud y servicios.
          </p>
        </div>

        <div className="blog-pillar-grid">
          {blogPillars.map((post) => (
            <article className="blog-pillar-card" key={post.slug}>
              <span className="blog-pillar-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section blog-section">
        <div className="section-heading blog-heading">
          <span className="section-kicker">Como trabajamos</span>
          <h2>Del contenido a la conversion.</h2>
          <p>
            Nuestro enfoque no es publicar articulos aislados. La idea es que cada
            contenido se conecte con una landing, una accion clara y una propuesta
            alineada al tipo de cliente que quieres atraer.
          </p>
        </div>

        <div className="blog-editorial-grid">
          <article className="blog-editorial-card">
            <h3>Busqueda</h3>
            <p>
              Partimos de lo que tus potenciales clientes ya estan escribiendo en Google
              cuando sienten un problema concreto.
            </p>
          </article>
          <article className="blog-editorial-card">
            <h3>Contenido</h3>
            <p>
              Desarrollamos temas que explican, ordenan y ayudan a decidir, sin relleno
              ni tecnicismos innecesarios.
            </p>
          </article>
          <article className="blog-editorial-card">
            <h3>Accion</h3>
            <p>
              Cada pieza debe facilitar el siguiente paso: consultar, pedir presupuesto,
              agendar o escribir por WhatsApp.
            </p>
          </article>
        </div>
      </section>

      <section className="section blog-section">
        <article className="blog-featured-article">
          <div className="blog-featured-header">
            <span className="section-kicker">Articulo modelo</span>
            <h2>{featuredArticle.seoTitle}</h2>
          </div>

          <p className="blog-featured-intro">{featuredArticle.intro}</p>

          <div className="blog-featured-sections">
            {featuredArticle.sections.map((section) => (
              <section className="blog-featured-block" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <div className="blog-cta-card">
            <div>
              <strong>Quieres bajar ausencias, ordenar tu agenda o mejorar la captacion de consultas?</strong>
              <p>{featuredArticle.cta}</p>
            </div>
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </a>
          </div>
        </article>
      </section>
    </section>
  )
}
