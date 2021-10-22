import { ORDER_TABLE } from 'constants/db_tables'
import { addOrderResponse, AddOrderResponse, Order } from 'models'
import { useMutation } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<Order, 'id' | 'created_at' | 'updated_at'>

export const addOrder = async (payload: Payload) => {
  const response = await supabase
    .from<AddOrderResponse>(ORDER_TABLE)
    .insert([payload])
    .single()

  const data = parseApiResponse(addOrderResponse, response)

  // // ORDER_ITEM
  // const { data: orderItem, error: orderItemError } = await supabase
  //   .from<OrderItem>(ORDER_ITEMS)
  //   .insert(
  //     payload.products.map((product) => ({
  //       product_id: product.id,
  //       quantity: product.quantity,
  //       order_id: order.id
  //     }))
  //   )

  // if (orderItemError) {
  //   throw new Error(orderItemError.message)
  // }

  // if (!orderItem) {
  //   throw new Error('addOrderSupabase/orderItem error')
  // }

  return data
}

export const useAddOrder = () => {
  const { mutateAsync } = useMutation(addOrder)

  return async (payload: Payload) => await mutateAsync(payload)
}
