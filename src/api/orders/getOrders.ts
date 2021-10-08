import { OrderStatus, Order, User, DeliveryType, OrderItem } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

type Base = Pick<Order, 'id' | 'updated_at' | 'created_at' | 'total'>

export type GetOrdersResponse = Base & {
  customerEmail: { email: User['email'] }
  customerName: { full_name: User['full_name'] }
  customerPhone: { phone: User['phone'] }
  deliveryType: { label: DeliveryType['label'] }
  isCompany: { is_company: User['is_company'] }
  products: Pick<OrderItem, 'id' | 'quantity'>[]
  status: OrderStatus
}

const getOrders = async (status: OrderStatus) => {
  const { data, error } = await supabase
    .from<GetOrdersResponse>('order')
    .select(
      `
      id,
      deliveryType: delivery_type(label),
      total,
      updated_at,
      created_at,
      isCompany: user(is_company),
      customerName: user(full_name),
      customerPhone: user(phone),
      customerEmail: user(email),
      status
      `
    )
    .eq('status', status)
    .order('updated_at', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getOrders')
  }

  return data
}

export const useGetOrders = (status: OrderStatus) =>
  useQuery([getOrdersQueryKey, { status }], () => getOrders(status))

export const getOrdersQueryKey = 'orders'
