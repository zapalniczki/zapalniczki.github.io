import { BasketItem } from 'models'
import React, { createContext, ReactNode, useState } from 'react'

type BasketContex = {
  basket: BasketItem[]
  basketLength: number
  clearBasket: () => void
  getProductFromBasket: (id: string) => BasketItem | undefined
  productCount: number
  setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>
}

export const basketContext = createContext<BasketContex>({
  basket: [],
  setBasket: () => undefined,
  clearBasket: () => undefined,
  basketLength: 0,
  getProductFromBasket: () => undefined,
  productCount: 0
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

  const productCount = basket
    .map((product) => product.quantity)
    .reduce((prev, curr) => prev + curr, 0)

  return (
    <basketContext.Provider
      value={{
        basket,
        setBasket,
        clearBasket,
        basketLength,
        getProductFromBasket,
        productCount
      }}
    >
      {children}
    </basketContext.Provider>
  )
}

export default BasketProvider
