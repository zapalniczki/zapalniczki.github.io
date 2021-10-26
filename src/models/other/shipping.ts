import { address } from '../db'
import { TypeOf } from 'zod'

const shipping = address.omit({
  id: true,
  created_at: true,
  updated_at: true
})

export type Shipping = TypeOf<typeof shipping>

export default shipping
