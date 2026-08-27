import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1>Página no encontrada.</h1>
        <p className="lede">Esa ruta aún no forma parte de la tienda.</p>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
