import { useEffect, useState } from 'react'
import { seedCategories, type CategoryRecord } from '../data/site'
import { isActive } from './active'

function asCategory(item: CategoryRecord): CategoryRecord | null {
  const id = Number(item.id)
  if (!Number.isInteger(id) || id < 1) return null
  return { ...item, id, active: isActive(item.active) }
}

async function readJson(url: string): Promise<CategoryRecord[]> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Could not load ${url}`)
  return (await response.json()) as CategoryRecord[]
}

export async function loadCategories(): Promise<CategoryRecord[]> {
  const fallback = `${import.meta.env.BASE_URL}categories.json`
  if (import.meta.env.DEV) {
    try {
      return (await readJson('/api/categories')).map(asCategory).filter((item): item is CategoryRecord => item !== null)
    } catch {
      return (await readJson(fallback)).map(asCategory).filter((item): item is CategoryRecord => item !== null)
    }
  }
  try {
    return (await readJson(fallback)).map(asCategory).filter((item): item is CategoryRecord => item !== null)
  } catch {
    return seedCategories.map(asCategory).filter((item): item is CategoryRecord => item !== null)
  }
}

export async function loadLiveCategories(): Promise<CategoryRecord[]> {
  const items = await loadCategories()
  return items
    .filter((item) => isActive(item.active))
    .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name))
}

export function useCategories() {
  const [categories, setCategories] = useState<CategoryRecord[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false
    loadLiveCategories()
      .then((items) => {
        if (cancelled) return
        setCategories(items)
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

  return { categories, status }
}
