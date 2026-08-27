import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice, productDetail, type Product } from '../data/site'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { add, setQuantity, lines } = useCart()
  const quantity = lines.find((line) => line.product.id === product.id)?.quantity ?? 0
  const saved = (product.previousPrice ?? product.price) - product.price

  return (
    <article className="product-card">
      <span className="part-tag">{product.category === 'Batteries' ? 'Baterías' : 'LCD'}</span>
      {saved > 0 ? <span className="deal-tag">Oferta</span> : null}

      <Link className="product-media" to="/shop">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-body">
        <p className="product-model">{product.brand} · {product.model}</p>
        <h3>
          <Link to="/shop">{product.name}</Link>
        </h3>
        <p className="product-spec">{productDetail(product)}</p>
        <p className="product-price">
          <strong>{formatPrice(product.price)}</strong>
          {saved > 0 ? <span>Ahorras {formatPrice(saved)}</span> : null}
        </p>
      </div>
      {quantity === 0 ? (
        <button className="button button-block" type="button" onClick={() => add(product)}>
          Añadir
        </button>
      ) : (
        <div className="card-qty">
          <button
            type="button"
            aria-label={`Menos ${product.name}`}
            onClick={() => setQuantity(product.id, quantity - 1)}
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            aria-label={`Más ${product.name}`}
            onClick={() => add(product)}
          >
            +
          </button>
        </div>
      )}
    </article>
  )
}
