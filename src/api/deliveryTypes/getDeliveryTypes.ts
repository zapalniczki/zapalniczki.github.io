import { DeliveryType } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

const getDeliveryTypes = async () => {
  const { data, error } = await supabase
    .from<DeliveryType>('delivery_type')
    .select(
      'id, label, price, time, requires_address, isAvailable, frontend_icon_name'
    )

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

export default getDeliveryTypes
