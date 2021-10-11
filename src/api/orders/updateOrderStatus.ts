import { ORDER_TABLE } from 'constants/db_tables'
import { Order, OrderStatus } from 'models'
import supabase from 'supabase'

type Payload = {
  id: string
  status: OrderStatus
}

export const updateOrderStatus = async (payload: Payload) => {
  const { data, error } = await supabase
    .from<Order>(ORDER_TABLE)
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
