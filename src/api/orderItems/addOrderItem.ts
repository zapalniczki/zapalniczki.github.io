import { ORDER_ITEMS } from 'constants/db_tables'
import { AddOrderItemResponse, addOrderItemResponse, OrderItem } from 'models'
import { useMutation } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Payload = Omit<OrderItem, 'created_at' | 'updated_at' | 'id'>[]

export const addOrderItem = async (payload: Payload) => {
  const response = await supabase
    .from<AddOrderItemResponse>(ORDER_ITEMS)
    .insert(payload)

  const data = parseApiResponse(array(addOrderItemResponse), response)

  return data
}

export const useAddOrderItem = () => {
  const { mutateAsync } = useMutation(addOrderItem)

  return async (payload: Payload) => await mutateAsync(payload)
}
