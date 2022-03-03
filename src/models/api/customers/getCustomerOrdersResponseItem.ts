import { order, customer } from 'braty-common'
import { array, TypeOf } from 'zod'

const getCustomerOrdersResponseItem = customer
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
