import { DELIVERY_TYPES_TABLE } from 'constants/db_tables'
import {
  DeliveryType,
  updateDeliveryTypeResponse,
  UpdateDeliveryTypeResponse
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<DeliveryType, 'id' | 'is_enabled'>

export const updateDeliveryType = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateDeliveryTypeResponse>(DELIVERY_TYPES_TABLE)
    .update({
      is_enabled: payload.is_enabled
    })
    .eq('id', payload.id)

  const data = parseApiResponse(updateDeliveryTypeResponse, response)

  return data
}
