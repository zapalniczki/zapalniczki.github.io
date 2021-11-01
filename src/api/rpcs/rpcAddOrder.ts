import { rpcAddOrderResponse, Voucher } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = {
  address: string
  contact_details: string
  delivery_type: string
  order_will_take_long: boolean
  payment_type: string
  products_price: number
  same_address_as_invoice: boolean | null
  shipping: string | null
  voucher_id: Voucher['id'] | null
}

export const rpcAddOrder = async (payload: Payload) => {
  const response = await supabase.rpc('add_order_function', payload)

  const data = parseApiResponse(rpcAddOrderResponse, response)

  return data
}
