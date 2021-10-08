import { DELIVERY_TYPE_TABLE } from 'constants/db_tables'
import { DeliveryType } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

type GetDeliveryTypesResponse = DeliveryType

const getDeliveryTypes = async () => {
  const { data, error } = await supabase
    .from<GetDeliveryTypesResponse>(DELIVERY_TYPE_TABLE)
    .select()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getDeliveryTypes')
  }

  return data
}

export const useGetDeliveryTypes = () =>
  useQuery('deliveryTypes', getDeliveryTypes)
