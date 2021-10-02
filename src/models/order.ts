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
  delivery_type: string().uuid(),
  id: string().uuid(),
  payment_type: string().uuid(),
  shipping_id: string().uuid(),
  status: string(),
  total: number(),
  updated_at: string(),
  user_id: string().uuid()
})

export type Order = TypeOf<typeof order>
