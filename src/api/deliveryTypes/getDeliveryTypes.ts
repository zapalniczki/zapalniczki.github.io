import { DELIVERY_TYPES_TABLE } from 'constants/db_tables'
import {
  getDeliveryTypesResponseItem,
  GetDeliveryTypesResponseItem
} from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

const getDeliveryTypes = async () => {
  const response = await supabase
    .from<GetDeliveryTypesResponseItem>(DELIVERY_TYPES_TABLE)
    .select()

  const data = parseApiResponse(array(getDeliveryTypesResponseItem), response)

  return data
}

export const useGetDeliveryTypes = () =>
  useQuery('deliveryTypes', getDeliveryTypes)
