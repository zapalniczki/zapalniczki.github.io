import { DB_TABLES, OrderItem } from 'braty-common'
import { AddOrderItemResponse, addOrderItemResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Payload = Omit<OrderItem, 'created_at' | 'updated_at' | 'id'>[]

export const addOrderItem = async (payload: Payload) => {
  const response = await supabase
    .from<AddOrderItemResponse>(DB_TABLES.ORDER_ITEMS)
    .insert(payload)

  const data = parseApiResponse(array(addOrderItemResponse), response)

  return data
}
