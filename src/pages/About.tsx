import { team, values } from '../data/site'

export function About() {
  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">Studio</p>
        <h1>About</h1>
        <p className="lede">
          This page is a layout for your story. Keep the structure, replace the
          names, and write the real practice when you have it.
        </p>

        <div className="split about-intro">
          <h2>We design identities, websites, and rooms that hold together.</h2>
          <p className="muted">
            Harbor is fictional. Use it as a stand-in while you decide on
            positioning, photography, and tone. The team list and values below
            are sample content only.
          </p>
        </div>

        <ul className="value-grid">
          {values.map((value) => (
            <li key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </li>
          ))}
        </ul>

        <h2 className="section-title">People</h2>
        <ul className="team-grid">
          {team.map((member) => (
            <li key={member.name} className="team-card">
              <div className="portrait" aria-hidden="true" />
              <h3>{member.name}</h3>
              <p className="muted">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
