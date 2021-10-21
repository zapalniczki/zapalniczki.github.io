import { boolean, object, string, TypeOf } from 'zod'

const tableBase = object({
  created_at: string(),
  id: string().uuid(),
  updated_at: string()
})

const user = tableBase.extend({
  address_id: string().uuid(),
  email: string(),
  full_name: string(),
  is_company: boolean(),
  nip: string().nullable(),
  phone: string(),
  preferred_delivery: string().uuid(),
  preferred_payment: string().uuid(),
  shipping_id: string().uuid().nullable()
})

export type User = TypeOf<typeof user>

export default user
