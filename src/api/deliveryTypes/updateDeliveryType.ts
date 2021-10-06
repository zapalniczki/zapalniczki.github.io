import { DeliveryType } from 'models'
import { useMutation } from 'react-query'
import supabase from 'supabase'

type UpdateDeliveryTypePayload = {
  id: string,
  isEnabled: boolean
}

const updateDeliveryType = async (payload: UpdateDeliveryTypePayload) => {
  const { data, error } = await supabase
    .from<DeliveryType>('delivery_type')
    .update({
      is_enabled: payload.isEnabled
    })
    .eq('id', payload.id)

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export const useUpdateDeliveryType = () => {
  const { mutateAsync } = useMutation(updateDeliveryType)

  return (params: UpdateDeliveryTypePayload) => mutateAsync(params)
}
