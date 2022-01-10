import { PAYMENT_TYPE_TABLE } from 'constants/db_tables'
import { updatePaymentTypeResponse, UpdatePaymentTypeResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { PaymentType } from 'braty-common'

type Payload = Pick<PaymentType, 'id' | 'is_enabled'>

export const updatePaymentType = async (payload: Payload) => {
  const response = await supabase
    .from<UpdatePaymentTypeResponse>(PAYMENT_TYPE_TABLE)
    .update({
      is_enabled: payload.is_enabled
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updatePaymentTypeResponse, response)

  return data
}
