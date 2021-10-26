import { VOUCHERS_TABLE } from 'constants/db_tables'
import { voucher, Voucher } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Voucher, 'id'>

export const getVoucher = async (payload: Payload) => {
  const response = await supabase
    .from<Voucher>(VOUCHERS_TABLE)
    .select()
    .eq('id', payload.id)
    .eq('is_used', false)
    .single()

  const data = parseApiResponse(voucher, response)

  return data
}
