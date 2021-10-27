import { address, user } from '../db'
import { TypeOf } from 'zod'

const getUserResponse = user
  .pick({
    full_name: true,
    email: true,
    phone: true,
    id: true,
    is_company: true,
    nip: true
  })
  .extend({
    address: address.pick({
      city: true,
      post_code: true,
      street_address: true
    })
  })

export type GetUserResponse = TypeOf<typeof getUserResponse>

export default getUserResponse
