import { DB_TABLES, DeliveryType } from 'braty-common'
import { updateDeliveryTypeResponse, UpdateDeliveryTypeResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<DeliveryType, 'id' | 'is_enabled'>

export const updateDeliveryType = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateDeliveryTypeResponse>(DB_TABLES.DELIVERY_TYPES)
    .update({
      is_enabled: payload.is_enabled
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updateDeliveryTypeResponse, response)

  return data
}
