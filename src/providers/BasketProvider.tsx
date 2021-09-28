import { BasketItem } from 'models/basketItem'
import React, { createContext, ReactNode, useState } from 'react'

type BasketContex = {
  basket: BasketItem[]
  setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>
  clearBasket: () => void
  basketLength: number
  getProductFromBasket: (id: string) => BasketItem | undefined
}

export const basketContext = createContext<BasketContex>({
  basket: [],
  setBasket: () => undefined,
  clearBasket: () => undefined,
  basketLength: 0,
  getProductFromBasket: () => undefined
})

type Props = {
  children: ReactNode
}
const BasketProvider = ({ children }: Props) => {
  const [basket, setBasket] = useState<BasketContex['basket']>([])

  const clearBasket = () => setBasket([])

  const basketLength = basket.length

  const getProductFromBasket = (id: string) => {
    const basketItem = basket.find((basketElem) => basketElem.id === id)

    return basketItem
  }

  return (
    <basketContext.Provider
      value={{
        basket,
        setBasket,
        clearBasket,
        basketLength,
        getProductFromBasket
      }}
    >
      {children}
    </basketContext.Provider>
  )
}

export default BasketProvider
