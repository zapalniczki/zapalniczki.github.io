import { DB_TABLES, Order } from 'braty-common'
import { getOrderStatusResponse, GetOrderStatusResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Params = {
  order_id: Order['id']
}

export const getOrderStatus = async (params: Params) => {
  const response = await supabase
    .from<GetOrderStatusResponse>(DB_TABLES.ORDER)
    .select('id, status')
    .eq('id', params.order_id)
    .single()

  const data = parseApiResponse(getOrderStatusResponse, response)

  return data
}
