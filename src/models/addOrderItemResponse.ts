import { TypeOf } from 'zod'
import orderItem from './db/orderItem'

const addOrderItemResponse = orderItem

export type AddOrderItemResponse = TypeOf<typeof addOrderItemResponse>

export default addOrderItemResponse
