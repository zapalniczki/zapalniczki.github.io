import { INVOICES_TABLE } from 'constants/db_tables'
import { getInvoiceResponse, GetInvoiceResponse, Order } from 'models'
import { useMutation } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Params = {
  order_id: Order['id']
}

const getInvoice = async (params: Params) => {
  const response = await supabase
    .from<GetInvoiceResponse>(INVOICES_TABLE)
    .select()
    .eq('order_id', params.order_id)
    .single()

  const data = parseApiResponse(getInvoiceResponse, response)

  return data
}

export const useGetInvoice = () => {
  const { mutateAsync } = useMutation(getInvoice)

  return (params: Params) => mutateAsync(params)
}

export default useGetInvoice
