import { PaymentType } from 'models'
import { useMutation } from 'react-query'
import supabase from 'supabase'

type UpdatePaymentTypePayload = {
  id: string
  is_enabled: boolean
}

const updatePaymentType = async (payload: UpdatePaymentTypePayload) => {
  const { data, error } = await supabase
    .from<PaymentType>('payment_type')
    .update({
      is_enabled: payload.is_enabled
    })
    .eq('id', payload.id)

  if (error) {
    throw new Error(error.code)
  }

  return data
}

const useUpdatePaymentType = () => {
  const { mutateAsync } = useMutation(updatePaymentType)

  return (params: UpdatePaymentTypePayload) => mutateAsync(params)
}

export default useUpdatePaymentType
