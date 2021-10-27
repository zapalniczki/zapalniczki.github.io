import { number, string, TypeOf } from 'zod'
import tableBase from './tableBase'

const orderItem = tableBase.extend({
  order_id: string().uuid(),
  product_id: string().uuid(),
  quantity: number(),
  price: number()
})

export type OrderItem = TypeOf<typeof orderItem>

export default orderItem
