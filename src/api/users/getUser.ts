import { DB_TABLES, Order } from 'braty-common'
import { getInvoiceResponse, GetInvoiceResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Params = {
  order_id: Order['id']
}

export const getUser = async (params: Params) => {
  const response = await supabase
    .from<GetInvoiceResponse>(DB_TABLES.INVOICES)
    .select()
    .eq('id', params.id)
    .single()

  const data = parseApiResponse(getInvoiceResponse, response)

  return data
}
