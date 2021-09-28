import { createContext, ReactNode, useState } from 'react'
import React from 'react'
import {
  AddressCdn,
  City,
  Email,
  Fullname,
  HourseNr,
  IsCompany,
  Nip,
  Phone,
  Postcode,
  Street
} from 'Types'
import { BasketItem } from 'models'

type Props = {
  children: ReactNode
}

const CheckoutProvider = ({ children }: Props) => {
  const [checkout, setCheckout] = useState(initState)

  return (
    <checkoutContext.Provider value={{ checkout, setCheckout }}>
      {children}
    </checkoutContext.Provider>
  )
}

export type ContactDetails2 = {
  isCompany: IsCompany
  fullName: Fullname
  nip: Nip
  street: Street
  streetNo: HourseNr
  addressCdn: AddressCdn
  postCode: Postcode
  city: City
  phone: Phone
  email: Email
}

type DeliveryType2 = string

export type Shipping2 = {
  street: Street
  streetNo: HourseNr
  addressCdn: AddressCdn
  postCode: Postcode
  city: City
}

export type PaymentType2 = string

export type Checkout = {
  totalNew: number
  products2: BasketItem[] | null
  contactDetails2: ContactDetails2 | null
  deliveryType2: DeliveryType2 | null
  shipping2: Shipping2 | null
  paymentType2: PaymentType2 | null
}

export type CheckoutContent = {
  checkout: Checkout
  setCheckout: React.Dispatch<React.SetStateAction<Checkout>>
}

export const initState: Checkout = {
  totalNew: 0,
  products2: null,
  contactDetails2: null,
  deliveryType2: null,
  shipping2: null,
  paymentType2: null
}

export const checkoutContext = createContext<CheckoutContent>({
  checkout: initState,
  setCheckout: () => undefined
})

export default CheckoutProvider
