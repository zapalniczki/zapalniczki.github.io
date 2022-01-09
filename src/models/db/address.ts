import tableBase from './tableBase'
import { string, TypeOf } from 'zod'

const address = tableBase.extend({
  city: string(),
  post_code: string(),
  street_address: string(),
  country: string()
})

export type Address = TypeOf<typeof address>

export default address
