export type Banner = {
  id: string
  title: string
  body: string
  ctaLabel: string
  ctaHref: string
  image: string
  active: boolean
  sortOrder: number
}

export const seedBanners: Banner[] = [
  {
    id: 'home-hero',
    title: 'Batteries and LCD for phone repair',
    body: 'Parts for workshops in Spain. Shop by model and get the screen or battery you need.',
    ctaLabel: 'Shop now',
    ctaHref: '/shop',
    image: 'images/banner-home.png',
    active: true,
    sortOrder: 0,
  },
  {
    id: 'home-lcd',
    title: 'LCD screens in stock',
    body: 'Replacement displays matched to the model. Built for repair counters, not retail phones.',
    ctaLabel: 'Shop LCD',
    ctaHref: '/shop?category=LCD',
    image: 'images/banner-lcd.png',
    active: true,
    sortOrder: 1,
  },
  {
    id: 'home-batteries',
    title: 'Batteries ready to fit',
    body: 'Capacity-matched packs for Apple and Samsung. Order the part, fit the phone.',
    ctaLabel: 'Shop batteries',
    ctaHref: '/shop?category=Batteries',
    image: 'images/banner-batteries.png',
    active: true,
    sortOrder: 2,
  },
]
