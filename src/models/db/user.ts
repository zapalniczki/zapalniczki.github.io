import { boolean, object, string, TypeOf } from 'zod'

const user = object({
  address_id: string().uuid(),
  created_at: string(),
  email: string(),
  full_name: string(),
  id: string().uuid(),
  is_company: boolean(),
  nip: string(),
  phone: string(),
  preferred_delivery: string().uuid(),
  preferred_payment: string().uuid(),
  shipping_id: string().uuid(),
  updated_at: string()
})

export type User = TypeOf<typeof user>

export default user
