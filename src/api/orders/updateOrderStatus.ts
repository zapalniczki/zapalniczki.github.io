import { ORDER_TABLE } from 'constants/db_tables'
import {
  Order,
  updateOrderStatusResponse,
  UpdateOrderStatusResponse
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Order, 'id' | 'status'>

export const updateOrderStatus = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateOrderStatusResponse>(ORDER_TABLE)
    .update({
      status: payload.status
    })
    .eq('id', payload.id)

  const data = parseApiResponse(updateOrderStatusResponse, response)

  return data
}
