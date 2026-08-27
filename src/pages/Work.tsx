import { useMemo, useState } from 'react'
import { projects, type ProjectCategory } from '../data/site'

const filters: Array<'All' | ProjectCategory> = ['All', 'Brand', 'Web', 'Space']

export function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const visible = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((project) => project.category === filter)
  }, [filter])

  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">Index</p>
        <h1>Work</h1>
        <p className="lede">
          Filter the placeholder projects below. Hook each card to a case-study
          route when you are ready for real content.
        </p>

        <div className="filters" role="tablist" aria-label="Project categories">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={filter === item ? 'chip is-active' : 'chip'}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="project-list">
          {visible.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-media" aria-hidden="true" />
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
