import { order } from 'models'
import { TypeOf } from 'zod'

const getOrderStatusResponse = order.pick({
  id: true,
  status: true
})

export type GetOrderStatusResponse = TypeOf<typeof getOrderStatusResponse>

export default getOrderStatusResponse
