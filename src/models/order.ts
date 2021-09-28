import { string, number, object, enum as zenum, array, TypeOf } from 'zod'

import { PAYMENT_METHODS } from 'cms/config'
import ORDER_STATUSES from 'constants/orderStatuses'
import basketItem from './basketItem'
import timestapDate from './timestampDate'

const mobile = object({
  country: string(),
  countryCode: string(),
  dialCode: string(),
  value: string()
})

export type Mobile = TypeOf<typeof mobile>

const contactDetails = object({
  city: string(),
  email: string(),
  fullname: string(),
  mobile,
  nip: string(),
  postCode: string(),
  street: string()
})

export type ContactDetails = TypeOf<typeof contactDetails>

const customerType = zenum(['INDIVIDUAL', 'COMPANY'])

export type CustomerType = TypeOf<typeof customerType>

const deliveryType = zenum(['FREE_PARCEL', 'PICK_UP'])

export type DeliveryType = TypeOf<typeof deliveryType>

const paymentType = zenum([...PAYMENT_METHODS])

export type PaymentType = TypeOf<typeof paymentType>

const shipping = object({
  city: string(),
  postCode: string(),
  street: string()
})

export type Shipping = TypeOf<typeof shipping>

const total = object({
  delivery: number(),
  products: number(),
  sum: number()
})

export type Total = TypeOf<typeof total>

const status = zenum([...ORDER_STATUSES])

export type OrderStatus = TypeOf<typeof status>

const order = object({
  id: string(),
  products: array(basketItem).nullable(),
  customerType: customerType.nullable(),
  contactDetails: contactDetails.nullable(),
  deliveryType: deliveryType.nullable(),
  shipping: shipping.nullable(),
  paymentType: paymentType.nullable(),
  invoice: string().nullable(),
  total,
  createdAt: timestapDate,
  modifiedAt: timestapDate,
  status
})

export type Order = TypeOf<typeof order>

export default order
