import { object, string, TypeOf } from 'zod'

const address = object({
  city: string(),
  created_at: string(),
  id: string().uuid(),
  post_code: string(),
  street_address: string(),
  updated_at: string()
})

export type Address = TypeOf<typeof address>

export default address
