import { createContext, ReactNode, useState } from 'react'
import React from 'react'
import {
  Address,
  User,
  BasketItem,
  DeliveryType,
  Order,
  PaymentType
} from 'models'

type Props = {
  children: ReactNode
}

const CheckoutProvider = ({ children }: Props) => {
  const [checkout, setCheckout] = useState(initState)

  console.log(checkout)

  return (
    <checkoutContext.Provider value={{ checkout, setCheckout }}>
      {children}
    </checkoutContext.Provider>
  )
}

export type ContactDetails = Shipping &
  Pick<User, 'is_company' | 'email' | 'full_name' | 'phone' | 'nip'>

type DeliveryTypeId = DeliveryType['id']
type PaymentTypeId = PaymentType['id']

export type Shipping = Omit<Address, 'id' | 'created_at' | 'updated_at'>

export type Checkout = {
  contact_details: ContactDetails | null
  delivery_type: DeliveryTypeId | null
  payment_type: PaymentTypeId | null
  products: BasketItem[] | null
  same_address_as_invoice: boolean
  shipping: Shipping | null
  total: Order['total']
}

export type CheckoutContent = {
  checkout: Checkout
  setCheckout: React.Dispatch<React.SetStateAction<Checkout>>
}

export const initState: Checkout = {
  contact_details: null,
  total: 0,
  products: null,
  delivery_type: null,
  shipping: null,
  payment_type: null,
  same_address_as_invoice: true
}

export const checkoutContext = createContext<CheckoutContent>({
  checkout: initState,
  setCheckout: () => undefined
})

export default CheckoutProvider
