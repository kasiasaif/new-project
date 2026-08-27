import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type CartContextValue = {
  count: number
  add: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  const value = useMemo(
    () => ({
      count,
      add: () => setCount((current) => current + 1),
    }),
    [count],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const cart = useContext(CartContext)
  if (!cart) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return cart
}
