import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import {
  formatCount,
  formatPrice,
  type Product,
} from '../data/site'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart()
  const saved = product.previousPrice - product.price

  return (
    <article className="product-card">
      {saved > 0 ? <span className="deal-tag">Price drop</span> : null}

      <Link className="product-media" to="/shop" style={{ background: product.accent }} aria-label={product.name}>
        <span className="device-shape" />
      </Link>

      <div className="product-body">
        <h3>
          <Link to="/shop">{product.name}</Link>
        </h3>
        <p className="product-spec">
          {product.grade} · {product.color} · {product.spec}
        </p>
        <p className="product-rating">
          {product.rating.toFixed(1)}/5 ({formatCount(product.reviewCount)})
        </p>
        <p className="product-price">
          <strong>{formatPrice(product.price)}</strong>
          {saved > 0 ? <span>Save {formatPrice(saved)}</span> : null}
        </p>
        <button className="button button-block" type="button" onClick={add}>
          Add to cart
        </button>
      </div>
    </article>
  )
}
