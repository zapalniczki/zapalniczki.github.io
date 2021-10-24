import { VOUCHERS_TABLE } from 'constants/db_tables'
import { addVoucherResponse, AddVoucherResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

export const addVoucher = async () => {
  const response = await supabase
    .from<AddVoucherResponse>(VOUCHERS_TABLE)
    .insert({})
    .single()

  const data = parseApiResponse(addVoucherResponse, response)

  return data
}
