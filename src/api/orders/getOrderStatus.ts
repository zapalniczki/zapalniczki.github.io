import { ORDER_TABLE } from 'constants/db_tables'
import { getOrderStatusResponse, GetOrderStatusResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { Order } from 'braty-common'

type Params = {
  order_id: Order['id']
}

export const getOrderStatus = async (params: Params) => {
  const response = await supabase
    .from<GetOrderStatusResponse>(ORDER_TABLE)
    .select('id, status')
    .eq('id', params.order_id)
    .single()

  const data = parseApiResponse(getOrderStatusResponse, response)

  return data
}
