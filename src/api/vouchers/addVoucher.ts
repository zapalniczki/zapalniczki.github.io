import { DB_TABLES, Voucher } from 'braty-common'
import { addVoucherResponse, AddVoucherResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Voucher, 'discount_pl' | 'discount_en'>

export const addVoucher = async ({ discount_en, discount_pl }: Payload) => {
  const response = await supabase
    .from<AddVoucherResponse>(DB_TABLES.VOUCHERS)
    .insert({
      discount_pl,
      discount_en
    })
    .single()

  const data = parseApiResponse(addVoucherResponse, response)

  return data
}
