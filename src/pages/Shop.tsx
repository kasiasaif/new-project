import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { categories, categoryLabel, type Category } from '../data/site'
import { useProducts } from '../lib/products'

const filters: Array<'All' | Category> = ['All', ...categories]

export function Shop() {
  const { products, status } = useProducts()
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const categoryParam = params.get('category')
  const active: 'All' | Category =
    categoryParam && categories.includes(categoryParam as Category)
      ? (categoryParam as Category)
      : 'All'

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = active === 'All' || product.category === active
      const haystack =
        `${product.name} ${product.model} ${product.spec} ${product.brand} ${categoryLabel[product.category]}`.toLowerCase()
      const matchesQuery = !needle || haystack.includes(needle)
      return matchesCategory && matchesQuery
    })
  }, [active, products, query])

  function setCategory(next: 'All' | Category) {
    const nextParams = new URLSearchParams(params)
    if (next === 'All') nextParams.delete('category')
    else nextParams.set('category', next)
    setParams(nextParams)
  }

  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">Shop</p>
        <h1>{query ? `Results for “${query}”` : 'Batteries and LCD'}</h1>
        <p className="lede">
          Two categories for now. Search a model such as iPhone 11 or Galaxy A15.
        </p>

        <div className="filters" role="tablist" aria-label="Part type">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active === item}
              className={active === item ? 'chip is-active' : 'chip'}
              onClick={() => setCategory(item)}
            >
              {categoryLabel[item]}
            </button>
          ))}
        </div>

        {status === 'loading' ? <p className="muted">Loading parts…</p> : null}
        {status === 'error' ? <p className="muted">Could not load the catalog.</p> : null}
        {status === 'ready' && visible.length === 0 ? (
          <p className="muted">No parts match that search.</p>
        ) : null}
        {status === 'ready' && visible.length > 0 ? (
          <div className="product-grid">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
