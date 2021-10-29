import { TypeOf } from 'zod'
import { order } from '../db'

const rpcAddOrderResponse = order.shape.id

export type RpcAddOrderResponse = TypeOf<typeof rpcAddOrderResponse>

export default rpcAddOrderResponse
