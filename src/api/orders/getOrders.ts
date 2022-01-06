import {
  ICONS_TABLE,
  LABELS_TABLE,
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

type Params = Pick<Order, 'status' | 'is_test'>

export const getOrders = async ({ is_test, status }: Params) => {
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
          name,
          mold: ${MOLDS_TABLE} (
            status
          ),
          label: ${LABELS_TABLE} (
            label_pl
          ),
          icon: ${ICONS_TABLE} (
            label_pl
          )
        )
      ),
      parcel: ${PARCELS_TABLE} (
        ref,
        link,
        id
      ),
      is_test
      `
    )
    .eq('status', status)
    .filter('is_test', 'eq', is_test)
    .order('updated_at', { ascending: true })

  const data = parseApiResponse(array(getOrdersResponseItem), response)

  return data
}
