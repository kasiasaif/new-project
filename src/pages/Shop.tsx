import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { categories, categoryLabel, products, type Category } from '../data/site'

const filters: Array<'All' | Category> = ['All', ...categories]

export function Shop() {
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
  }, [active, query])

  function setCategory(next: 'All' | Category) {
    const nextParams = new URLSearchParams(params)
    if (next === 'All') nextParams.delete('category')
    else nextParams.set('category', next)
    setParams(nextParams)
  }

  return (
    <section className="page">
      <div className="shell">
        <p className="eyebrow">Tienda</p>
        <h1>{query ? `Resultados para “${query}”` : 'Baterías y LCD'}</h1>
        <p className="lede">
          Dos categorías por ahora. Busca un modelo, por ejemplo iPhone 11 o Galaxy A15.
        </p>

        <div className="filters" role="tablist" aria-label="Tipo de recambio">
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

        {visible.length === 0 ? (
          <p className="muted">Ningún recambio coincide con esa búsqueda.</p>
        ) : (
          <div className="product-grid">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
