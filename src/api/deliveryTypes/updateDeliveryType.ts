import { DELIVERY_TYPES_TABLE } from 'constants/db_tables'
import { updateDeliveryTypeResponse, UpdateDeliveryTypeResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { DeliveryType } from 'braty-common'

type Payload = Pick<DeliveryType, 'id' | 'is_enabled'>

export const updateDeliveryType = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateDeliveryTypeResponse>(DELIVERY_TYPES_TABLE)
    .update({
      is_enabled: payload.is_enabled
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updateDeliveryTypeResponse, response)

  return data
}
