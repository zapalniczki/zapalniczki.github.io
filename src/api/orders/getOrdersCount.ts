import { DB_TABLES, Order } from 'braty-common'
import { GetOrdersResponseItem } from 'models'
import supabase from 'supabase'

type Params = Pick<Order, 'status' | 'is_test'>

export const getOrdersCount = async ({ is_test, status }: Params) => {
  const response = await supabase
    .from<GetOrdersResponseItem>(DB_TABLES.ORDER)
    .select('id', { count: 'exact', head: true })
    .eq('status', status)
    .filter('is_test', 'eq', is_test)

  const count = response.count ?? 0

  return count
}
