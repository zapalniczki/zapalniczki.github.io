import { DB_TABLES, Voucher } from 'braty-common'
import { addVoucherResponse, AddVoucherResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Voucher, 'discount'>

export const addVoucher = async ({ discount }: Payload) => {
  const response = await supabase
    .from<AddVoucherResponse>(DB_TABLES.VOUCHERS)
    .insert({
      discount
    })
    .single()

  const data = parseApiResponse(addVoucherResponse, response)

  return data
}
