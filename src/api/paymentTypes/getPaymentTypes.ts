import { PAYMENT_TYPE_TABLE } from 'constants/db_tables'
import {
  getPaymentTypesResponseItem,
  GetPaymentTypesResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getPaymentTypes = async () => {
  const response = await supabase
    .from<GetPaymentTypesResponseItem>(PAYMENT_TYPE_TABLE)
    .select()

  const data = parseApiResponse(array(getPaymentTypesResponseItem), response)

  return data
}
