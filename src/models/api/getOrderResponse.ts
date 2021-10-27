import { order, orderItem, address } from '../db'
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
    .nullable()
})

export type GetOrderResponse = TypeOf<typeof getOrderResponse>

export default getOrderResponse
