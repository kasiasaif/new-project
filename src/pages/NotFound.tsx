import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p className="lede">That route is not part of the skeleton yet.</p>
        <Link className="button" to="/">
          Back home
        </Link>
      </div>
    </section>
  )
}
