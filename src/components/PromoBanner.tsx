import { useEffect, useRef, useState, type TouchEvent } from 'react'
import { Link } from 'react-router-dom'
import { type Banner } from '../data/banner'

export function PromoBanner({ banners }: { banners: Banner[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const total = banners.length

  useEffect(() => {
    if (total < 2 || paused) return
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % total)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [paused, total])

  if (total === 0) return null

  function goTo(next: number) {
    setIndex((next + total) % total)
  }

  function onTouchStart(event: TouchEvent<HTMLElement>) {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  function onTouchEnd(event: TouchEvent<HTMLElement>) {
    if (touchStartX.current == null) return
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const delta = endX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 48) return
    goTo(index + (delta < 0 ? 1 : -1))
  }

  return (
    <section
      className="promo-banner"
      aria-roledescription="carousel"
      aria-label="Promotions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="promo-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {banners.map((banner, slideIndex) => {
          const active = slideIndex === index
          return (
            <article
              key={banner.id}
              className={active ? 'promo-slide is-active' : 'promo-slide'}
              aria-hidden={!active}
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} of ${total}`}
            >
              <div className="promo-banner-media">
                <img src={banner.image} alt="" />
              </div>
              <div className="shell promo-banner-copy">
                <p className="eyebrow">tescgsm</p>
                <h1>{banner.title}</h1>
                <p className="lede">{banner.body}</p>
                {banner.ctaHref.startsWith('/') ? (
                  <Link className="button" to={banner.ctaHref} tabIndex={active ? 0 : -1}>
                    {banner.ctaLabel}
                  </Link>
                ) : (
                  <a className="button" href={banner.ctaHref} tabIndex={active ? 0 : -1}>
                    {banner.ctaLabel}
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {total > 1 ? (
        <div className="promo-dots" role="tablist" aria-label="Banner slides">
          {banners.map((banner, slideIndex) => (
            <button
              key={banner.id}
              type="button"
              role="tab"
              aria-label={`Show slide ${slideIndex + 1}`}
              aria-selected={slideIndex === index}
              className={slideIndex === index ? 'is-active' : ''}
              onClick={() => goTo(slideIndex)}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}
