import { TypeOf } from 'zod'
import { orderItem } from 'braty-common'

const addOrderItemResponse = orderItem

export type AddOrderItemResponse = TypeOf<typeof addOrderItemResponse>

export default addOrderItemResponse
