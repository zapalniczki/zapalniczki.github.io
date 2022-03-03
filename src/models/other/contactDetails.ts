import { TypeOf } from 'zod'
import { customer } from 'braty-common'
import shipping from '../other/shipping'

const contactDetails = customer
  .pick({
    email: true,
    full_name: true,
    phone: true,
    nip: true
  })
  .merge(shipping)

export type ContactDetails = TypeOf<typeof contactDetails>

export default contactDetails
