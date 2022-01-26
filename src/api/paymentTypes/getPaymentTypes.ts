import { DB_TABLES, PaymentType } from 'braty-common'
import {
  getPaymentTypesResponseItem,
  GetPaymentTypesResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = Partial<Pick<PaymentType, 'in_person' | 'domestic' | 'abroad'>>

export const getPaymentTypes = async (params: Params = {}) => {
  const response = await supabase
    .from<GetPaymentTypesResponseItem>(DB_TABLES.PAYMENT_TYPE)
    .select()
    .match({
      ...(params?.in_person !== undefined && { in_person: params.in_person }),
      ...(params?.domestic && { domestic: params.domestic }),
      ...(params?.abroad && { abroad: params.abroad })
    })

  const data = parseApiResponse(array(getPaymentTypesResponseItem), response)

  return data
}
