import {
  ADDRESSES_TABLE,
  DELIVERY_TYPES_TABLE,
  INVOICES_TABLE,
  ORDER_ITEMS,
  ORDER_TABLE,
  PARCELS_TABLE,
  VOUCHERS_TABLE
} from 'constants/db_tables'
import { getOrderResponse, GetOrderResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { Order } from 'braty-common'

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
      ),
      invoice: ${INVOICES_TABLE} (
        url
      ),
      delivery_type: ${DELIVERY_TYPES_TABLE} (
        label,
        time
      ),
      voucher: ${VOUCHERS_TABLE} (
        id,
        discount,
        is_fixed
      ),
      parcel: ${PARCELS_TABLE} (
        ref,
        link
      )
      `
    )
    .eq('id', id)
    .single()

  const data = parseApiResponse(getOrderResponse, response)

  return data
}
