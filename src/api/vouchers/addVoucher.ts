import { VOUCHERS_TABLE } from 'constants/db_tables'
import { addVoucherResponse, AddVoucherResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { Voucher } from 'braty-common'

type Payload = Pick<Voucher, 'discount'>

export const addVoucher = async ({ discount }: Payload) => {
  const response = await supabase
    .from<AddVoucherResponse>(VOUCHERS_TABLE)
    .insert({
      discount
    })
    .single()

  const data = parseApiResponse(addVoucherResponse, response)

  return data
}
