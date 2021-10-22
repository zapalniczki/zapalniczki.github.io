import { number, object, string, TypeOf } from 'zod'

const orderItem = object({
  created_at: string(),
  id: string().uuid(),
  updated_at: string(),

  order_id: string().uuid(),
  product_id: string().uuid(),
  quantity: number()
})

export type OrderItem = TypeOf<typeof orderItem>

export default orderItem
