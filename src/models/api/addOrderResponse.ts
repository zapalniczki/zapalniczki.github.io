import { order } from 'braty-common'
import { TypeOf } from 'zod'

const addOrderResponse = order

export type AddOrderResponse = TypeOf<typeof addOrderResponse>

export default addOrderResponse
