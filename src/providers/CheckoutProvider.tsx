import { createContext, ReactNode, useEffect, useState } from 'react'
import React from 'react'
import {
  Address,
  User,
  BasketItem,
  DeliveryType,
  PaymentType,
  Product,
  Voucher
} from 'models'
import { useLocalStorage } from 'hooks'

type Props = {
  children: ReactNode
}

const CheckoutProvider = ({ children }: Props) => {
  const localCheckout: Checkout | null = useLocalStorage({
    type: 'GET',
    key: LOCAL_STORAGE_CHECKOUT_KEY
  })

  const [checkout, setCheckout] = useState(
    // localCheckout ? localCheckout : initState
    initState
  )

  console.log(checkout)

  const getProductFromBasket = (id: string) => {
    const basketItem = checkout.basket.find(
      (basketElem) => basketElem.id === id
    )

    return basketItem
  }

  // useEffect(() => {
  //   window.localStorage.setItem(
  //     LOCAL_STORAGE_CHECKOUT_KEY,
  //     JSON.stringify(checkout)
  //   )
  // }, [checkout])

  return (
    <checkoutContext.Provider
      value={{ checkout, setCheckout, getProductFromBasket }}
    >
      {children}
    </checkoutContext.Provider>
  )
}

const LOCAL_STORAGE_CHECKOUT_KEY = 'checkout'

export type ContactDetails = Shipping &
  Pick<User, 'is_company' | 'email' | 'full_name' | 'phone' | 'nip'>

type DeliveryTypeId = DeliveryType['id']
type PaymentTypeId = PaymentType['id']

export type Shipping = Omit<Address, 'id' | 'created_at' | 'updated_at'>

export type Checkout = {
  basket: BasketItem[]
  contact_details: ContactDetails | null
  delivery_type: DeliveryTypeId | null
  payment_type: PaymentTypeId | null
  same_address_as_invoice: boolean
  shipping: Shipping | null
  total: {
    delivery: number
    products: {
      id: Product['id']
      total: number
    }[]
  }
  voucher_id: Voucher['id'] | null
}

export type CheckoutContent = {
  checkout: Checkout
  getProductFromBasket: (id: string) => BasketItem | undefined

  setCheckout: React.Dispatch<React.SetStateAction<Checkout>>
}

export const initState: Checkout = {
  contact_details: null,
  total: {
    products: [],
    delivery: 0
  },
  basket: [],
  delivery_type: null,
  shipping: null,
  payment_type: null,
  voucher_id: null,
  same_address_as_invoice: true
}

export const checkoutContext = createContext<CheckoutContent>({
  checkout: initState,
  getProductFromBasket: () => undefined,
  setCheckout: () => undefined
})

export default CheckoutProvider
