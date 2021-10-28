import { ORDER_TABLE } from 'constants/db_tables'
import { addOrderResponse, AddOrderResponse, Order } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<Order, 'id' | 'created_at' | 'updated_at' | 'status'>

export const addOrder = async (payload: Payload) => {
  const response = await supabase
    .from<AddOrderResponse>(ORDER_TABLE)
    .insert([payload])
    .single()

  const data = parseApiResponse(addOrderResponse, response)

  return data
}
