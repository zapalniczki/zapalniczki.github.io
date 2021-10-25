import { string, object, TypeOf, enum as zenum, number } from 'zod'

const orderStatus = zenum([
  'OPEN',
  'CONFIRMED',
  'PAYMENT_RECEIVED',
  'PRODUCTION',
  'AWAITING_FOR_PICKUP',
  'IN_DELIVERY',
  'COMPLETED'
])

export type OrderStatus = TypeOf<typeof orderStatus>
export const ORDER_STATUSES = orderStatus.options

const order = object({
  created_at: string(),
  delivery_type: string().uuid(),
  id: string().uuid(),
  payment_type: string().uuid(),
  shipping_id: string().uuid().nullable(),
  status: orderStatus,
  total: number(),
  updated_at: string(),
  user_id: string().uuid()
})

export type Order = TypeOf<typeof order>

export default order
