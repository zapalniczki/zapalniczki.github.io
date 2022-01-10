import { INVOICES_TABLE } from 'constants/db_tables'
import { getInvoiceResponse, GetInvoiceResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { Order } from 'braty-common'

type Params = {
  order_id: Order['id']
}

export const getInvoice = async (params: Params) => {
  const response = await supabase
    .from<GetInvoiceResponse>(INVOICES_TABLE)
    .select()
    .eq('order_id', params.order_id)
    .single()

  const data = parseApiResponse(getInvoiceResponse, response)

  return data
}
