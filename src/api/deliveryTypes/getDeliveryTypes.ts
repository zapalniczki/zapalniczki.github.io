import { DB_TABLES } from 'braty-common'
import {
  getDeliveryTypesResponseItem,
  GetDeliveryTypesResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getDeliveryTypes = async () => {
  const response = await supabase
    .from<GetDeliveryTypesResponseItem>(DB_TABLES.DELIVERY_TYPES)
    .select()

  const data = parseApiResponse(array(getDeliveryTypesResponseItem), response)

  return data
}
