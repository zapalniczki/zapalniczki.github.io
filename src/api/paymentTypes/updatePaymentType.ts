import { PAYMENT_TYPE_TABLE } from 'constants/db_tables'
import { PaymentType } from 'models'
import supabase from 'supabase'

type UpdatePaymentTypePayload = {
  id: string
  is_enabled: boolean
}

const updatePaymentType = async (payload: UpdatePaymentTypePayload) => {
  const { data, error } = await supabase
    .from<PaymentType>(PAYMENT_TYPE_TABLE)
    .update({
      is_enabled: payload.is_enabled
    })
    .eq('id', payload.id)

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export default updatePaymentType
