import { useEffect, useState } from 'react'
import { type Banner } from '../data/banner'

function withImageUrl(banner: Banner): Banner {
  const base = import.meta.env.BASE_URL
  return {
    ...banner,
    image: `${base}${banner.image.replace(/^\//, '')}`,
  }
}

async function readJson(url: string): Promise<Banner[]> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Could not load ${url}`)
  return (await response.json()) as Banner[]
}

export async function loadBanners(): Promise<Banner[]> {
  const fallback = `${import.meta.env.BASE_URL}banners.json`
  if (import.meta.env.DEV) {
    try {
      return (await readJson('/api/banners')).map(withImageUrl)
    } catch {
      return (await readJson(fallback)).map(withImageUrl)
    }
  }
  return (await readJson(fallback)).map(withImageUrl)
}

export function useBanners() {
  const [banners, setBanners] = useState<Banner[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false
    loadBanners()
      .then((items) => {
        if (cancelled) return
        setBanners(items.filter((item) => item.active).sort((a, b) => a.sortOrder - b.sortOrder))
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

  return { banners, status }
}
