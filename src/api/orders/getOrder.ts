import { ADDRESSES_TABLE, ORDER_ITEMS, ORDER_TABLE } from 'constants/db_tables'
import { getOrderResponse, GetOrderResponse, Order } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Props = {
  id: Order['id']
}

export const getOrder = async ({ id }: Props) => {
  const response = await supabase
    .from<GetOrderResponse>(ORDER_TABLE)
    .select(
      `*,
      products: ${ORDER_ITEMS} (
        product_id,
        price,
        quantity
      ),
      shipping: ${ADDRESSES_TABLE} (
        post_code,
        street_address,
        city
      )
      `
    )
    .eq('id', id)
    .single()

  const data = parseApiResponse(getOrderResponse, response)

  return data
}
