import { DB_TABLES, Order } from 'braty-common'
import { GetOrdersResponseItem, getOrdersResponseItem } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = Pick<Order, 'status' | 'is_test'>

export const getOrders = async ({ is_test, status }: Params) => {
  const response = await supabase
    .from<GetOrdersResponseItem>(DB_TABLES.ORDER)
    .select(
      `
      id,
      deliveryType: delivery_type(
        label_pl,
        label_en,
        description_pl,
        description_en
      ),
      total_pl,
      total_en,
      updated_at,
      created_at,
      customerName: ${DB_TABLES.USERS}!user_id (
        full_name
      ),
      customerPhone: ${DB_TABLES.USERS}!user_id (
        phone
      ),
      customerEmail: ${DB_TABLES.USERS}!user_id (
        email
      ),
      status,
      products: ${DB_TABLES.ORDER_ITEMS} (
        id,
        quantity,
        product: ${DB_TABLES.PRODUCTS} (
          name_pl,
          name_en,
          mold: ${DB_TABLES.MOLDS} (
            status
          ),
          label: ${DB_TABLES.LABELS} (
            key
          ),
          icon: ${DB_TABLES.ICONS} (
            label_pl,
            label_en
          )
        )
      ),
      parcel: ${DB_TABLES.PARCELS} (
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
