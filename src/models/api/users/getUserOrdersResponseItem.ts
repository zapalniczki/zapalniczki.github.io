import { order, user } from 'braty-common'
import { array, TypeOf } from 'zod'

const getUserOrdersResponseItem = user
  .pick({
    id: true,
    email: true
  })
  .extend({
    orders: array(order)
  })

export type GetUserOrdersResponseItem = TypeOf<typeof getUserOrdersResponseItem>

export default getUserOrdersResponseItem
