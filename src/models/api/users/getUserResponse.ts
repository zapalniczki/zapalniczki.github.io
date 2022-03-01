import { TypeOf } from 'zod'
import { user, address } from 'braty-common'

const getUserResponse = user
  .pick({
    full_name: true,
    email: true,
    phone: true,
    id: true,
    nip: true
  })
  .extend({
    address: address.pick({
      city: true,
      country: true,
      post_code: true,
      street_address: true
    })
  })

export type GetUserResponse = TypeOf<typeof getUserResponse>

export default getUserResponse
