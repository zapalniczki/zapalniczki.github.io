import { string, object, TypeOf } from 'zod'

const address = object({
  street: string(),
  streetNo: string(),
  adressCdn: string(),
  postCode: string(),
  city: string()
})

export type Address = TypeOf<typeof address>

const shipping = address

export type Shipping = TypeOf<typeof shipping>

const supabaseOrder = object({})

export default supabaseOrder
