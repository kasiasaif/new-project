export type Category = 'Phones' | 'Laptops' | 'Tablets' | 'Audio' | 'Gaming'

export type Grade = 'Premium' | 'Excellent' | 'Good' | 'Fair'

export type Product = {
  id: string
  name: string
  category: Category
  grade: Grade
  color: string
  spec: string
  price: number
  previousPrice: number
  rating: number
  reviewCount: number
  accent: string
}

export const site = {
  name: 'Rewired',
  tagline: 'Refurbished tech',
  email: 'hello@rewired.shop',
  location: 'United Kingdom',
} as const

export const navItems = [
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Help', path: '/contact' },
]

export const categories: Category[] = ['Phones', 'Laptops', 'Tablets', 'Audio', 'Gaming']

export const promises = [
  { title: '1-year warranty', body: 'Every device is covered for 12 months.' },
  { title: '30-day returns', body: 'Send it back if it is not right.' },
  { title: 'Tested and graded', body: 'Premium, Excellent, Good, or Fair — no surprises.' },
  { title: 'Free delivery', body: 'On orders over £50, across the UK.' },
]

export const faqs = [
  {
    question: 'Can I trade in my old phone?',
    answer:
      'Not yet in this skeleton. Later this can connect to a trade-in flow, the way a marketplace like Back Market does.',
  },
  {
    question: 'Are these new devices?',
    answer:
      'No. They are refurbished: professionally checked, graded, and sold for less than new.',
  },
  {
    question: 'Does the form on Help actually send?',
    answer: 'No. It is front-end only until you wire an email or API service.',
  },
]

export const products: Product[] = [
  {
    id: 'iphone-12',
    name: 'iPhone 12',
    category: 'Phones',
    grade: 'Excellent',
    color: 'Black',
    spec: '128 GB',
    price: 178,
    previousPrice: 189,
    rating: 4.3,
    reviewCount: 98523,
    accent: '#1c1c1e',
  },
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    category: 'Phones',
    grade: 'Premium',
    color: 'Graphite',
    spec: '128 GB',
    price: 434,
    previousPrice: 469,
    rating: 4.4,
    reviewCount: 32888,
    accent: '#4a4a4c',
  },
  {
    id: 'pixel-8a',
    name: 'Pixel 8a',
    category: 'Phones',
    grade: 'Premium',
    color: 'Black',
    spec: '128 GB',
    price: 210,
    previousPrice: 226,
    rating: 4.5,
    reviewCount: 851,
    accent: '#2b2b2b',
  },
  {
    id: 'macbook-air',
    name: 'MacBook Air M1',
    category: 'Laptops',
    grade: 'Fair',
    color: 'Silver',
    spec: '13" · 8 GB · 128 GB',
    price: 349,
    previousPrice: 375,
    rating: 4.4,
    reviewCount: 7423,
    accent: '#c8c8c8',
  },
  {
    id: 'ipad',
    name: 'iPad 10th gen',
    category: 'Tablets',
    grade: 'Good',
    color: 'Blue',
    spec: '64 GB · Wi-Fi',
    price: 259,
    previousPrice: 299,
    rating: 4.5,
    reviewCount: 4120,
    accent: '#6aa6d6',
  },
  {
    id: 'airpods',
    name: 'AirPods Pro 2',
    category: 'Audio',
    grade: 'Excellent',
    color: 'White',
    spec: 'USB-C case',
    price: 149,
    previousPrice: 179,
    rating: 4.6,
    reviewCount: 22110,
    accent: '#ececec',
  },
  {
    id: 'switch',
    name: 'Nintendo Switch OLED',
    category: 'Gaming',
    grade: 'Good',
    color: 'White',
    spec: '64 GB',
    price: 199,
    previousPrice: 229,
    rating: 4.7,
    reviewCount: 8904,
    accent: '#e8e8e8',
  },
  {
    id: 'galaxy-s22',
    name: 'Galaxy S22',
    category: 'Phones',
    grade: 'Fair',
    color: 'Green',
    spec: '256 GB',
    price: 182,
    previousPrice: 199,
    rating: 4.4,
    reviewCount: 14741,
    accent: '#3d6b4f',
  },
]

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatCount(value: number): string {
  return new Intl.NumberFormat('en-GB').format(value)
}
