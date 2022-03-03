import { DB_TABLES, voucher, Voucher } from 'braty-common'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Payload = Pick<Voucher, 'id'>

export const getVoucher = async (payload: Payload) => {
  const response = await supabase
    .from<Voucher>(DB_TABLES.VOUCHERS)
    .select()
    .eq('id', payload.id)
    .eq('is_used', false)
    .single()

  const data = parseApiResponse(voucher, response)

  return data
}
