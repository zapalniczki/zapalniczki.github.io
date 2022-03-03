import { TypeOf } from 'zod'
import { user, address } from 'braty-common'

const getCustomerResponse = user
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

export type GetCustomerResponse = TypeOf<typeof getCustomerResponse>

export default getCustomerResponse
