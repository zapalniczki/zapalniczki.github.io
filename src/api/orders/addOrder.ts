import { DB_TABLES, Order } from 'braty-common'
import { addOrderResponse, AddOrderResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<Order, 'id' | 'created_at' | 'updated_at' | 'status'>

export const addOrder = async (payload: Payload) => {
  const response = await supabase
    .from<AddOrderResponse>(DB_TABLES.ORDER)
    .insert([payload])
    .single()

  const data = parseApiResponse(addOrderResponse, response)

  return data
}
