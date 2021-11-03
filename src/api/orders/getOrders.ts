import {
  MOLDS_TABLE,
  ORDER_ITEMS,
  ORDER_TABLE,
  PARCELS_TABLE,
  PRODUCTS_TABLE,
  USERS_TABLE
} from 'constants/db_tables'
import { GetOrdersResponseItem, getOrdersResponseItem, Order } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getOrders = async (status: Order['status']) => {
  const response = await supabase
    .from<GetOrdersResponseItem>(ORDER_TABLE)
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
      status,
      products: ${ORDER_ITEMS} (
        id,
        quantity,
        product: ${PRODUCTS_TABLE} (
          mold: ${MOLDS_TABLE} (
            status
          )
        )
      ),
      parcel: ${PARCELS_TABLE} (
        ref,
        link
      )
      `
    )
    .eq('status', status)
    .order('updated_at', { ascending: true })

  const data = parseApiResponse(array(getOrdersResponseItem), response)

  return data
}
