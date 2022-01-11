import { DB_TABLES, Order } from 'braty-common'
import { updateOrderStatusResponse, UpdateOrderStatusResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Order, 'id' | 'status' | 'parcel_id'>

export const updateOrderStatus = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateOrderStatusResponse>(DB_TABLES.ORDER)
    .update({
      status: payload.status,
      parcel_id: payload.parcel_id
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updateOrderStatusResponse, response)

  return data
}
