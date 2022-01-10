import { ORDER_TABLE } from 'constants/db_tables'
import { updateOrderStatusResponse, UpdateOrderStatusResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { Order } from 'braty-common'

type Payload = Pick<Order, 'id' | 'status' | 'parcel_id'>

export const updateOrderStatus = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateOrderStatusResponse>(ORDER_TABLE)
    .update({
      status: payload.status,
      parcel_id: payload.parcel_id
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updateOrderStatusResponse, response)

  return data
}
