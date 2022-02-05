import { DB_TABLES, DeliveryType } from 'braty-common'
import {
  getDeliveryTypesResponseItem,
  GetDeliveryTypesResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = Partial<Pick<DeliveryType, 'domestic' | 'abroad'>>

export const getDeliveryTypes = async (params?: Params) => {
  const match = getMatch(params)

  const response = await supabase
    .from<GetDeliveryTypesResponseItem>(DB_TABLES.DELIVERY_TYPES)
    .select()
    .eq('is_enabled', true)
    .match(match)

  const data = parseApiResponse(array(getDeliveryTypesResponseItem), response)

  return data
}

export const getMatch = (params?: Params) => ({
  ...(params?.abroad && { abroad: params.abroad }),
  ...(params?.domestic && { domestic: params.domestic })
})
