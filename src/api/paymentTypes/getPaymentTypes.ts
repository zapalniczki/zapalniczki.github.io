import { DB_TABLES } from 'braty-common'
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
    .from<GetPaymentTypesResponseItem>(DB_TABLES.PAYMENT_TYPE)
    .select()
    .match({
      ...(params.in_person !== undefined && { in_person: params.in_person })
    })

  const data = parseApiResponse(array(getPaymentTypesResponseItem), response)

  return data
}
