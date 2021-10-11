import { ORDER_TABLE } from 'constants/db_tables'
import { OrderStatus } from 'models'
import { useMutation } from 'react-query'
import supabase from 'supabase'

type Params = {
  id: string
}

type GetOrderStatusResponse = {
  id: string
  status: OrderStatus
}

export const getOrderStatus = async (params: Params) => {
  const { data, error } = await supabase
    .from<GetOrderStatusResponse>(ORDER_TABLE)
    .select('status')
    .eq('id', params.id)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getOrderStatus')
  }

  return data
}

export const useGetOrderStatus = () => {
  const { mutateAsync } = useMutation(getOrderStatus)

  return (params: Params) => mutateAsync(params)
}
