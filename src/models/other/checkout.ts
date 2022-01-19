import { basketItem, contactDetails, shipping } from '../other'

import { deliveryType, paymentType, voucher } from 'braty-common'

import { array, boolean, object, number, TypeOf } from 'zod'

const checkout = object({
  basket: array(basketItem),
  contact_details: contactDetails.nullable(),
  delivery_type: deliveryType.shape.id.nullable(),
  payment_type: paymentType.shape.id.nullable(),
  same_address_as_invoice: boolean().nullable(),
  delivery_type_allows_cash_payment: boolean().nullable(),
  shipping: shipping.nullable(),
  total: object({
    delivery: number(),
    payment: number()
  }),
  voucher_id: voucher.shape.id.nullable(),
  voucher: voucher
    .pick({
      is_fixed: true,
      discount: true
    })
    .nullable()
})

export type Checkout = TypeOf<typeof checkout>

export default checkout
