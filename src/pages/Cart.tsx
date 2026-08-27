import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice, productDetail } from '../data/site'

export function Cart() {
  const { lines, total, count, setQuantity, remove, clear } = useCart()

  if (count === 0) {
    return (
      <section className="page">
        <div className="shell cart-empty">
          <p className="eyebrow">Cesta</p>
          <h1>Tu cesta está vacía.</h1>
          <p className="lede">Añade una batería o un LCD y vuelve aquí.</p>
          <Link className="button" to="/shop">
            Seguir comprando
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page">
      <div className="shell cart-layout">
        <div>
          <p className="eyebrow">Cesta</p>
          <h1>
            {count} artículo{count === 1 ? '' : 's'}
          </h1>

          <ul className="cart-lines">
            {lines.map((line) => (
              <li key={line.product.id} className="cart-line">
                <img className="cart-swatch" src={line.product.image} alt="" />
                <div>
                  <h2>{line.product.name}</h2>
                  <p className="muted">{productDetail(line.product)}</p>
                  <p className="product-price">
                    <strong>{formatPrice(line.product.price)}</strong>
                  </p>
                  <div className="qty-row">
                    <button
                      type="button"
                      className="qty-btn"
                      aria-label={`Menos ${line.product.name}`}
                      onClick={() => setQuantity(line.product.id, line.quantity - 1)}
                    >
                      −
                    </button>
                    <span>{line.quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      aria-label={`Más ${line.product.name}`}
                      onClick={() => setQuantity(line.product.id, line.quantity + 1)}
                    >
                      +
                    </button>
                    <button type="button" className="text-btn" onClick={() => remove(line.product.id)}>
                      Quitar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="cart-summary">
          <h2>Resumen</h2>
          <p className="cart-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </p>
          <p className="muted">El pago aún no está conectado — esta página solo guarda la cesta.</p>
          <button className="button button-block" type="button" disabled>
            Pago próximamente
          </button>
          <Link className="button button-ghost button-block" to="/shop">
            Seguir comprando
          </Link>
          <button className="text-btn" type="button" onClick={clear}>
            Vaciar cesta
          </button>
        </aside>
      </div>
    </section>
  )
}
