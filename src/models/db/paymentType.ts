import { boolean, number, object, string, TypeOf } from 'zod'

const paymentType = object({
  id: string().uuid(),
  created_at: string(),
  updated_at: string(),
  label: string(),
  price: number(),
  time: string(),
  frontend_icon_name: string().nullable(),
  is_enabled: boolean().nullable()
})

export type PaymentType = TypeOf<typeof paymentType>

export default paymentType
