import { basketItem, contactDetails, shipping } from '../other'

import { deliveryType, paymentType, voucher } from '../db'

import { array, boolean, object, number, TypeOf } from 'zod'

const checkout = object({
  basket: array(basketItem),
  contact_details: contactDetails.nullable(),
  delivery_type: deliveryType.shape.id.nullable(),
  payment_type: paymentType.shape.id.nullable(),
  same_address_as_invoice: boolean(),
  shipping: shipping.nullable(),
  total: object({
    delivery: number()
  }),
  voucher_id: voucher.shape.id.nullable()
})

export type Checkout = TypeOf<typeof checkout>

export default checkout
