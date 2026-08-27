import { useEffect, useState } from 'react'
import { type Product } from '../data/site'

function withImageUrl(product: Product): Product {
  const base = import.meta.env.BASE_URL
  return {
    ...product,
    image: `${base}${product.image.replace(/^\//, '')}`,
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
      return (await readJson('/api/products')).map(withImageUrl)
    } catch {
      return (await readJson(fallback)).map(withImageUrl)
    }
  }
  return (await readJson(fallback)).map(withImageUrl)
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false
    loadProducts()
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
