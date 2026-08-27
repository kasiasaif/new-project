import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { TrustBar } from '../components/TrustBar'
import { categories, categoryLabel, products, services, site } from '../data/site'

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">{site.tagline}</p>
          <h1>Baterías y pantallas LCD para reparación de móviles.</h1>
          <p className="lede">
            tescgsm es un mostrador de recambios en España. De momento solo
            baterías y LCD — el resto de piezas puede llegar después.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/shop?category=LCD">
              Ver LCD
            </Link>
            <Link className="button button-ghost" to="/shop?category=Batteries">
              Ver baterías
            </Link>
          </div>
        </div>
      </section>

      <section className="shell">
        <div className="service-strip">
          {services.map((item) => (
            <Link key={item.title} className="service-card" to={item.href}>
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell">
        <TrustBar />
      </section>

      <section className="shell section">
        <h2>Comprar por tipo</h2>
        <div className="category-tiles">
          {categories.map((category) => (
            <Link key={category} className="category-tile" to={`/shop?category=${encodeURIComponent(category)}`}>
              {categoryLabel[category]}
            </Link>
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-head">
          <h2>Los más vendidos</h2>
          <Link to="/shop">Ver todo</Link>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
