import { useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { categories, navItems, site } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { count } = useCart()
  const navigate = useNavigate()

  function closeMenu() {
    setOpen(false)
  }

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = query.trim()
    navigate(next ? `/shop?q=${encodeURIComponent(next)}` : '/shop')
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="shell header-row">
        <Link className="wordmark" to="/" onClick={closeMenu}>
          {site.name}
        </Link>

        <form className="search" role="search" onSubmit={onSearch}>
          <label className="sr-only" htmlFor="site-search">
            Search products
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Search phones, laptops, audio…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="button" type="submit">
            Search
          </button>
        </form>

        <div className="header-actions">
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <span className="cart-pill" aria-label={`${count} items in cart`}>
            Cart {count}
          </span>
        </div>
      </div>

      <div className="category-bar">
        <div className="shell category-row">
          {categories.map((category) => (
            <Link key={category} to={`/shop?category=${encodeURIComponent(category)}`}>
              {category}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
