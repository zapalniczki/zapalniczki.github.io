import { TypeOf } from 'zod'
import { order } from 'braty-common'

const rpcAddOrderResponse = order.shape.id

export type RpcAddOrderResponse = TypeOf<typeof rpcAddOrderResponse>

export default rpcAddOrderResponse
