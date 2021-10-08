import { DELIVERY_TYPE_TABLE } from 'constants/db_tables'
import { DeliveryType } from 'models'
import supabase from 'supabase'

type UpdateDeliveryTypePayload = {
  id: string
  is_enabled: boolean
}

const updateDeliveryType = async (payload: UpdateDeliveryTypePayload) => {
  const { data, error } = await supabase
    .from<DeliveryType>(DELIVERY_TYPE_TABLE)
    .update({
      is_enabled: payload.is_enabled
    })
    .eq('id', payload.id)

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export default updateDeliveryType
