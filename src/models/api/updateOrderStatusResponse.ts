import { order } from 'braty-common'
import { TypeOf } from 'zod'

const updateOrderStatusResponse = order

export type UpdateOrderStatusResponse = TypeOf<typeof updateOrderStatusResponse>

export default updateOrderStatusResponse
