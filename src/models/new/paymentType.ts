import { boolean, object, string, TypeOf } from 'zod'

const paymentType = object({
  id: string(),
  label: string(),
  is_available: boolean().nullable()
})

export type PaymentType = TypeOf<typeof paymentType>

export default paymentType
