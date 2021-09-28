import { object, string, TypeOf } from 'zod'

const address = object({
  adress_cdn: string(),
  city: string(),
  created_at: string(),
  id: string().uuid(),
  post_code: string(),
  street: string(),
  street_no: string(),
  updated_at: string()
})

export type Address = TypeOf<typeof address>

export default address
