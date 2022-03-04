import {
  address,
  deliveryType,
  invoice,
  order,
  orderItem,
  parcel,
  voucher
} from 'braty-common'
import { array, TypeOf } from 'zod'

const getOrderResponse = order.extend({
  products: array(
    orderItem.pick({
      price_pl: true,
      price_en: true,
      quantity: true,
      product_id: true
    })
  ),

  shipping: address
    .pick({
      post_code: true,
      city: true,
      street_address: true,
      country: true
    })
    .nullable(),

  invoice: array(
    invoice.pick({
      url: true
    })
  ).optional(),

  delivery_type: deliveryType.pick({
    label_en: true,
    label_pl: true
  }),

  voucher: voucher
    .pick({
      id: true,
      is_fixed: true,
      discount_pl: true,
      discount_en: true
    })
    .nullable(),

  parcel: parcel
    .pick({
      link: true,
      ref: true
    })
    .nullable()
})

export type GetOrderResponse = TypeOf<typeof getOrderResponse>

export default getOrderResponse
