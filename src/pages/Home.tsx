import { Link } from 'react-router-dom'
import { projects, site } from '../data/site'

const featured = projects.slice(0, 3)

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">{site.tagline}</p>
          <h1>A studio for considered work.</h1>
          <p className="lede">
            Harbor is a placeholder brand for this site skeleton. Swap the name,
            copy, and projects when you know what the real studio is about.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/work">
              View work
            </Link>
            <Link className="button button-ghost" to="/contact">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell split">
          <h2>Selected work</h2>
          <p className="muted">
            Six sample projects live in <code>src/data/site.ts</code>. Edit that
            file to change titles, categories, and summaries.
          </p>
        </div>
      </section>

      <section className="shell project-list">
        {featured.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-media" aria-hidden="true" />
            <div className="project-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </article>
        ))}
      </section>

      <section className="cta">
        <div className="shell cta-inner">
          <h2>Have something in mind?</h2>
          <p>The contact page is wired as a front-end form only — no backend yet.</p>
          <Link className="button" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
