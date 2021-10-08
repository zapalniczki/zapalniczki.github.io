import { Order, OrderStatus } from 'models'
import supabase from 'supabase'

type Payload = {
  id: string
  status: OrderStatus
}

export const updateOrderStatus = async (payload: Payload) => {
  const { data, error } = await supabase
    .from<Order>('order')
    .update({
      status: payload.status
    })
    .eq('id', payload.id)

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export default updateOrderStatus
