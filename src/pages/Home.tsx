import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { TrustBar } from '../components/TrustBar'
import { categories, categoryLabel, services, site } from '../data/site'
import { useProducts } from '../lib/products'

export function Home() {
  const { products, status } = useProducts()

  return (
    <>
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">{site.tagline}</p>
          <h1>Batteries and LCD screens for phone repair.</h1>
          <p className="lede">
            tescgsm is a parts counter in Spain. For now we only stock batteries
            and LCD — other parts can come later.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/shop?category=LCD">
              Shop LCD
            </Link>
            <Link className="button button-ghost" to="/shop?category=Batteries">
              Shop batteries
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
        <h2>Shop by part</h2>
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
          <h2>Best sellers</h2>
          <Link to="/shop">See all</Link>
        </div>
        {status === 'loading' ? <p className="muted">Loading parts…</p> : null}
        {status === 'error' ? <p className="muted">Could not load the catalog.</p> : null}
        {status === 'ready' ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : null}
      </section>
    </>
  )
}
