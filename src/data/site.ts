export type Category = 'Batteries' | 'LCD'

export type Brand = 'Apple' | 'Samsung'

export type Product = {
  id: string
  name: string
  category: Category
  brand: Brand
  model: string
  spec: string
  price: number
  previousPrice?: number
  image: string
}

function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export const site = {
  name: 'tescgsm',
  tagline: 'Baterías y pantallas LCD para móviles',
  email: 'hola@tescgsm.es',
  location: 'España',
  whatsapp: '',
} as const

export const navItems = [
  { label: 'Tienda', path: '/shop' },
  { label: 'Nosotros', path: '/about' },
  { label: 'Ayuda', path: '/contact' },
]

export const categories: Category[] = ['Batteries', 'LCD']

export const categoryLabel: Record<Category | 'All', string> = {
  All: 'Todo',
  Batteries: 'Baterías',
  LCD: 'LCD',
}

export const promises = [
  { title: 'Solo baterías y LCD', body: 'Empezamos por los dos recambios que más pide un taller.' },
  { title: 'Por modelo', body: 'Cada ficha va ligada a un modelo concreto, no a un pack genérico.' },
  { title: 'Para reparación', body: 'Pensado como mostrador de recambios, no como tienda de móviles nuevos.' },
  { title: 'Consulta por WhatsApp', body: 'Stock y compatibilidad pasan por Ayuda hasta conectar el chat.' },
]

export const services = [
  { title: 'Pedir presupuesto', body: 'Indica el modelo. Confirmamos stock de batería o LCD.', href: '/contact' },
  { title: 'Devoluciones', body: 'Las piezas defectuosas se pueden devolver. El proceso es un placeholder.', href: '/contact' },
  { title: 'Seguimiento', body: 'El tracking irá aquí cuando los pedidos estén en marcha.', href: '/contact' },
  { title: 'WhatsApp', body: 'Consultas rápidas de baterías y pantallas.', href: '/contact' },
]

export const faqs = [
  {
    question: '¿Vendéis móviles enteros?',
    answer: 'De momento no. tescgsm solo vende baterías y pantallas LCD de recambio.',
  },
  {
    question: '¿Son piezas originales?',
    answer:
      'Estas fichas son de ejemplo para recambios compatibles. Cambia nombres, calidades y proveedores en src/data/site.ts cuando tengas stock real.',
  },
  {
    question: '¿Puedo pedir presupuesto de un modelo que no está listado?',
    answer: 'Sí — usa el formulario de Ayuda. Más adelante puede ir a WhatsApp, como en tiendas de recambios.',
  },
]

export const products: Product[] = [
  {
    id: 'bat-iphone-11',
    name: 'Batería para iPhone 11',
    category: 'Batteries',
    brand: 'Apple',
    model: 'iPhone 11',
    spec: '3520 mAh · capacidad aumentada',
    price: 18,
    previousPrice: 22,
    image: asset('images/battery-apple.png'),
  },
  {
    id: 'bat-iphone-12',
    name: 'Batería para iPhone 12',
    category: 'Batteries',
    brand: 'Apple',
    model: 'iPhone 12',
    spec: '2815 mAh',
    price: 19,
    image: asset('images/battery-apple.png'),
  },
  {
    id: 'bat-iphone-13',
    name: 'Batería para iPhone 13',
    category: 'Batteries',
    brand: 'Apple',
    model: 'iPhone 13',
    spec: '3227 mAh',
    price: 21,
    image: asset('images/battery-apple.png'),
  },
  {
    id: 'bat-a15',
    name: 'Batería para Galaxy A15 5G',
    category: 'Batteries',
    brand: 'Samsung',
    model: 'Galaxy A15 5G (A156B)',
    spec: '5000 mAh',
    price: 14,
    image: asset('images/battery-samsung.png'),
  },
  {
    id: 'lcd-iphone-11',
    name: 'Pantalla LCD para iPhone 11',
    category: 'LCD',
    brand: 'Apple',
    model: 'iPhone 11',
    spec: 'In-cell FHD · negro · IC cambiable',
    price: 29,
    previousPrice: 34,
    image: asset('images/lcd-apple.png'),
  },
  {
    id: 'lcd-iphone-12',
    name: 'Pantalla LCD para iPhone 12',
    category: 'LCD',
    brand: 'Apple',
    model: 'iPhone 12',
    spec: 'In-cell FHD · negro',
    price: 38,
    image: asset('images/lcd-apple.png'),
  },
  {
    id: 'lcd-iphone-13',
    name: 'Pantalla LCD para iPhone 13',
    category: 'LCD',
    brand: 'Apple',
    model: 'iPhone 13',
    spec: 'In-cell FHD · negro',
    price: 42,
    image: asset('images/lcd-apple.png'),
  },
  {
    id: 'lcd-a15',
    name: 'Pantalla LCD para Galaxy A15 5G',
    category: 'LCD',
    brand: 'Samsung',
    model: 'Galaxy A15 5G (A156B)',
    spec: 'Service pack · negro',
    price: 36,
    image: asset('images/lcd-samsung.png'),
  },
  {
    id: 'lcd-a14',
    name: 'Pantalla LCD para Galaxy A14 4G',
    category: 'LCD',
    brand: 'Samsung',
    model: 'Galaxy A14 4G (A145F)',
    spec: 'Service pack · negro',
    price: 27,
    image: asset('images/lcd-samsung.png'),
  },
  {
    id: 'bat-s22',
    name: 'Batería para Galaxy S22',
    category: 'Batteries',
    brand: 'Samsung',
    model: 'Galaxy S22',
    spec: '3700 mAh',
    price: 17,
    image: asset('images/battery-samsung.png'),
  },
]

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function productDetail(product: Product): string {
  return `${product.model} · ${product.spec}`
}
