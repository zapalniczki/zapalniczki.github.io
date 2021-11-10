import tableBase from './tableBase'
import { boolean, string, TypeOf } from 'zod'

const user = tableBase.extend({
  address_id: string().uuid(),
  email: string(),
  full_name: string(),
  nip: string().nullable(),
  phone: string(),
  preferred_delivery: string().uuid(),
  preferred_payment: string().uuid(),
  shipping_id: string().uuid().nullable(),
  is_test: boolean()
})

export type User = TypeOf<typeof user>

export default user
