import { DB_TABLES, Order } from 'braty-common'
import { getOrderResponse, GetOrderResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Props = {
  id: Order['id']
}

export const getOrder = async ({ id }: Props) => {
  const response = await supabase
    .from<GetOrderResponse>(DB_TABLES.ORDER)
    .select(
      `*,
      products: ${DB_TABLES.ORDER_ITEMS} (
        product_id,
        price,
        quantity
      ),
      shipping: ${DB_TABLES.ADDRESSES} (
        post_code,
        street_address,
        city,
        country
      ),
      invoice: ${DB_TABLES.INVOICES} (
        url
      ),
      delivery_type: ${DB_TABLES.DELIVERY_TYPES} (
        label_pl,
        label_en
      ),
      voucher: ${DB_TABLES.VOUCHERS} (
        id,
        discount,
        is_fixed
      ),
      parcel: ${DB_TABLES.PARCELS} (
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
