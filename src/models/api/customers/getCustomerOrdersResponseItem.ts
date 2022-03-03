import { order, user } from 'braty-common'
import { array, TypeOf } from 'zod'

const getCustomerOrdersResponseItem = user
  .pick({
    id: true,
    email: true
  })
  .extend({
    orders: array(order)
  })

export type GetCustomerOrdersResponseItem = TypeOf<
  typeof getCustomerOrdersResponseItem
>

export default getCustomerOrdersResponseItem
