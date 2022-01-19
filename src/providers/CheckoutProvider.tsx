import { useLocalStorage } from 'hooks'
import { BasketItem, Checkout, checkout as checkoutModel } from 'models'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
}

const CheckoutProvider = ({ children }: Props) => {
  const localCheckout: Checkout | null = useLocalStorage({
    key: LOCAL_STORAGE_CHECKOUT_KEY
  })
  const parseResult = checkoutModel.safeParse(localCheckout)

  let trueInitState: Checkout
  if (parseResult.success) {
    trueInitState = parseResult.data
  } else {
    trueInitState = initState
  }

  const [checkout, setCheckout] = useState(trueInitState)

  useEffect(() => {
    window.localStorage.setItem(
      LOCAL_STORAGE_CHECKOUT_KEY,
      JSON.stringify(checkout)
    )
  }, [checkout])

  const basket = checkout.basket
  const basketLength = basket.length
  const isBasketEmpty = !basketLength

  const productCount = basket
    .map((basketItem) => basketItem.quantity)
    .reduce((prev, curr) => prev + curr, 0)

  const clearBasket = () =>
    setCheckout((prev) => ({
      ...prev,
      basket: []
    }))

  const getProductFromBasket = (id: string) => {
    const basketItem = checkout.basket.find(
      (basketElem) => basketElem.id === id
    )

    return basketItem
  }

  const voucher = checkout.voucher

  return (
    <checkoutContext.Provider
      value={{
        checkout,
        setCheckout,
        clearBasket,
        getProductFromBasket,
        basketLength,
        productCount,
        basket,
        isBasketEmpty,
        voucher
      }}
    >
      {children}
    </checkoutContext.Provider>
  )
}

const LOCAL_STORAGE_CHECKOUT_KEY = 'checkout'

type CheckoutContent = {
  basket: BasketItem[]
  basketLength: number
  checkout: Checkout
  clearBasket: () => void
  getProductFromBasket: (id: string) => BasketItem | undefined
  isBasketEmpty: boolean
  productCount: number
  setCheckout: React.Dispatch<React.SetStateAction<Checkout>>
  voucher: Checkout['voucher']
}

export const initState: Checkout = {
  contact_details: null,
  total: {
    delivery: 0,
    payment: 0
  },
  basket: [],
  delivery_type: null,
  shipping: null,
  payment_type: null,
  voucher_id: null,
  voucher: null,
  same_address_as_invoice: null,
  delivery_type_allows_cash_payment: null
}

export const checkoutContext = createContext<CheckoutContent>({
  checkout: initState,
  getProductFromBasket: () => undefined,
  clearBasket: () => undefined,
  basketLength: 0,
  basket: [],
  productCount: 0,
  isBasketEmpty: true,
  setCheckout: () => undefined,
  voucher: null
})

export default CheckoutProvider
