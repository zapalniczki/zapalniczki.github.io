import { DB_TABLES, PaymentType } from 'braty-common'
import { updatePaymentTypeResponse, UpdatePaymentTypeResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Payload = Pick<PaymentType, 'id' | 'is_enabled'>

export const updatePaymentType = async (payload: Payload) => {
  const response = await supabase
    .from<UpdatePaymentTypeResponse>(DB_TABLES.PAYMENT_TYPE)
    .update({
      is_enabled: payload.is_enabled
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updatePaymentTypeResponse, response)

  return data
}
