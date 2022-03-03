import { DB_TABLES, Voucher } from 'braty-common'
import { addVoucherResponse, AddVoucherResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Payload = Pick<Voucher, 'id' | 'is_used'>

export const editVoucher = async ({ id, is_used }: Payload) => {
  const response = await supabase
    .from<AddVoucherResponse>(DB_TABLES.VOUCHERS)
    .update({ is_used })
    .eq('id', id)
    .single()

  const data = parseApiResponse(addVoucherResponse, response)

  return data
}
