import { boolean, object, string, TypeOf } from 'zod'

const paymentType = object({
  created_at: string(),
  is_available: boolean().nullable(),
  id: string(),
  label: string(),
  updated_at: string()
})

export type PaymentType = TypeOf<typeof paymentType>
