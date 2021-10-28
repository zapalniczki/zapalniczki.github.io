import { order, orderItem, address, invoice, deliveryType } from '../db'
import { array, TypeOf } from 'zod'

const getOrderResponse = order.extend({
  products: array(
    orderItem.pick({
      price: true,
      quantity: true,
      product_id: true
    })
  ),

  shipping: address
    .pick({
      post_code: true,
      city: true,
      street_address: true
    })
    .nullable(),

  invoice: array(
    invoice.pick({
      url: true
    })
  ).optional(),

  delivery_type: deliveryType.pick({
    label: true,
    time: true
  })
})

export type GetOrderResponse = TypeOf<typeof getOrderResponse>

export default getOrderResponse
