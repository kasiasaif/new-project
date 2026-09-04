import { useEffect, useState } from 'react'
import { type Product } from '../data/site'
import { isActive } from './active'
import { loadCategories } from './categories'

function isNumericId(value: unknown): boolean {
  const id = Number(value)
  return Number.isInteger(id) && id > 0
}

function withImageUrl(product: Product): Product {
  const base = import.meta.env.BASE_URL
  return {
    ...product,
    id: Number(product.id),
    category: Number(product.category),
    image: `${base}${product.image.replace(/^\//, '')}`,
    active: isActive(product.active),
  }
}

async function readJson(url: string): Promise<Product[]> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Could not load ${url}`)
  }
  return (await response.json()) as Product[]
}

export async function loadProducts(): Promise<Product[]> {
  const fallback = `${import.meta.env.BASE_URL}products.json`
  if (import.meta.env.DEV) {
    try {
      return (await readJson('/api/products')).map(withImageUrl).filter((item) => isNumericId(item.id) && isNumericId(item.category))
    } catch {
      return (await readJson(fallback)).map(withImageUrl).filter((item) => isNumericId(item.id) && isNumericId(item.category))
    }
  }
  return (await readJson(fallback)).map(withImageUrl).filter((item) => isNumericId(item.id) && isNumericId(item.category))
}

export async function loadLiveProducts(): Promise<Product[]> {
  const [products, categories] = await Promise.all([loadProducts(), loadCategories()])
  const liveCategoryIds = new Set(
    categories.filter((item) => isActive(item.active)).map((item) => item.id),
  )
  return products.filter((item) => isActive(item.active) && liveCategoryIds.has(item.category))
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false
    loadLiveProducts()
      .then((items) => {
        if (cancelled) return
        setProducts(items)
        setStatus('ready')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { products, status }
}
