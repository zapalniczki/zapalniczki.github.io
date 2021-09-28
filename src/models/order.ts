import { string, object, TypeOf, enum as zenum, number } from 'zod'

const orderStatus = zenum([
  'OPEN',
  'PAYMENT_RECEIVED',
  'IN_PREPARATION',
  'AWAITING_FOR_PICKUP',
  'IN_DELIVERY',
  'COMPLETED'
])

export type OrderStatus = TypeOf<typeof orderStatus>

const order = object({
  created_at: string(),
  delivery_type: string(),
  id: string(),
  payment_type: string(),
  shipping_id: string(),
  status: string(),
  total: number(),
  updated_at: string(),
  user_id: string()
})

export type Order = TypeOf<typeof order>
