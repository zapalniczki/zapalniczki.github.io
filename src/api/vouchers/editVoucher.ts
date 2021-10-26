import { VOUCHERS_TABLE } from 'constants/db_tables'
import { addVoucherResponse, AddVoucherResponse, Voucher } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Voucher, 'id' | 'is_used'>

export const editVoucher = async ({ id, is_used }: Payload) => {
  const response = await supabase
    .from<AddVoucherResponse>(VOUCHERS_TABLE)
    .update({ is_used })
    .eq('id', id)
    .single()

  const data = parseApiResponse(addVoucherResponse, response)

  return data
}
