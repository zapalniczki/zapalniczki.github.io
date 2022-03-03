import { BasketItem, rpcAddOrderResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'
import { Voucher } from 'braty-common'

type Payload = {
  address: string
  contact_details: string
  delivery_type: string
  is_test: boolean
  order_will_take_long: boolean
  payment_type: string
  products: (Omit<BasketItem, 'price_en' | 'price_pl' | 'id'> & {
    product_id: BasketItem['id']
  })[]
  products_price_en: number
  products_price_pl: number
  same_address_as_invoice: boolean | null
  shipping: string | null
  voucher_id: Voucher['id'] | null
}

export const rpcAddOrder = async (payload: Payload) => {
  const response = await supabase.rpc('add_order_function', payload)

  const data = parseApiResponse(rpcAddOrderResponse, response)

  return data
}
