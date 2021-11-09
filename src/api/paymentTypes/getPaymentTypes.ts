import { PAYMENT_TYPE_TABLE } from 'constants/db_tables'
import {
  getPaymentTypesResponseItem,
  GetPaymentTypesResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  in_person?: boolean
}

export const getPaymentTypes = async (params: Params = {}) => {
  const response = await supabase
    .from<GetPaymentTypesResponseItem>(PAYMENT_TYPE_TABLE)
    .select()
    .match({
      ...(params.in_person !== undefined && { in_person: params.in_person })
    })

  const data = parseApiResponse(array(getPaymentTypesResponseItem), response)

  return data
}
