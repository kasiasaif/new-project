import { Link } from 'react-router-dom'
import { navItems, site } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="wordmark">{site.name}</p>
          <p className="muted">{site.tagline} · {site.location}</p>
        </div>

        <nav aria-label="Footer">
          <Link to="/">Home</Link>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p className="muted">Replace this skeleton with your own content.</p>
        </div>
      </div>
    </footer>
  )
}
