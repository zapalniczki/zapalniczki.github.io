import { number, object, string, TypeOf } from 'zod'

const orderItem = object({
  created_at: string(),
  id: string().uuid(),
  order_id: string().uuid(),
  product_id: string().uuid(),
  quantity: number(),
  updated_at: string()
})

export type OrderItem = TypeOf<typeof orderItem>

export default orderItem
