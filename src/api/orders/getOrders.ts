import { OrderStatus } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

type GetOrdersRespons = {
  status: OrderStatus
}

const getOrders = async (status: OrderStatus) => {
  const { data, error } = await supabase
    .from<GetOrdersRespons>('orders')
    .select('getProductsSelect')
    .eq('status', status)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getOrders')
  }

  return data
}

export const useGetOrders = (status: OrderStatus) => {
  return useQuery(['orders', { status }], () => getOrders(status))
}
