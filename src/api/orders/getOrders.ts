import { ORDER_TABLE, USERS_TABLE } from 'constants/db_tables'
import { GetOrderResponseItem, getOrdersResponseItem, Order } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getOrders = async (status: Order['status']) => {
  const response = await supabase
    .from<GetOrderResponseItem>(ORDER_TABLE)
    .select(
      `
      id,
      deliveryType: delivery_type(
        label
      ),
      total,
      updated_at,
      created_at,
      customerName: ${USERS_TABLE}!user_id (
        full_name
      ),
      customerPhone: ${USERS_TABLE}!user_id (
        phone
      ),
      customerEmail: ${USERS_TABLE}!user_id (
        email
      ),
      status
      `
    )
    .eq('status', status)
    .order('updated_at', { ascending: true })

  const data = parseApiResponse(array(getOrdersResponseItem), response)

  return data
}
