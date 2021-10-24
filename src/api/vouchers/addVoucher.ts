import { VOUCHERS_TABLE } from 'constants/db_tables'
import { voucher, Voucher } from 'models'
import { useMutation } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

const addVoucher = async () => {
  const response = await supabase
    .from<Voucher>(VOUCHERS_TABLE)
    .insert({})
    .single()

  const data = parseApiResponse(voucher, response)

  return data
}

export const useAddVoucher = () => {
  const { mutateAsync } = useMutation(addVoucher)

  return () => mutateAsync()
}
