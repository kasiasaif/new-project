import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { labelForCategory } from '../data/site'
import { useCategories } from '../lib/categories'
import { useProducts } from '../lib/products'

export function Shop() {
  const { products, status } = useProducts()
  const { categories } = useCategories()
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const categoryParam = Number(params.get('category'))
  const active: 'All' | number =
    Number.isInteger(categoryParam) && categories.some((item) => item.id === categoryParam)
      ? categoryParam
      : 'All'
  const filters: Array<'All' | number> = ['All', ...categories.map((item) => item.id)]

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = active === 'All' || product.category === active
      const haystack =
        `${product.name} ${product.model} ${product.spec} ${product.brand} ${labelForCategory(product.category, categories)}`.toLowerCase()
      const matchesQuery = !needle || haystack.includes(needle)
      return matchesCategory && matchesQuery
    })
  }, [active, categories, products, query])

  function setCategory(next: 'All' | number) {
    const nextParams = new URLSearchParams(params)
    if (next === 'All') nextParams.delete('category')
    else nextParams.set('category', String(next))
    setParams(nextParams)
  }

  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">Shop</p>
        <h1>{query ? `Results for “${query}”` : 'Parts'}</h1>
        <p className="lede">
          Search a model such as iPhone 11 or Galaxy A15.
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
              {item === 'All' ? 'All' : labelForCategory(item, categories)}
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
