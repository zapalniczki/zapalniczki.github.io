import { TypeOf } from 'zod'
import user from '../db/user'
import shipping from '../other/shipping'

const contactDetails = user
  .pick({
    email: true,
    full_name: true,
    phone: true,
    nip: true
  })
  .merge(shipping)

export type ContactDetails = TypeOf<typeof contactDetails>

export default contactDetails
