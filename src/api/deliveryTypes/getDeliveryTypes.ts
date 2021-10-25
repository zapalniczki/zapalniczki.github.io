import { DELIVERY_TYPES_TABLE } from 'constants/db_tables'
import {
  getDeliveryTypesResponseItem,
  GetDeliveryTypesResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getDeliveryTypes = async () => {
  const response = await supabase
    .from<GetDeliveryTypesResponseItem>(DELIVERY_TYPES_TABLE)
    .select()

  const data = parseApiResponse(array(getDeliveryTypesResponseItem), response)

  return data
}
