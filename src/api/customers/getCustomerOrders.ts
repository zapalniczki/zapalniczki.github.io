import { DB_TABLES, User } from 'braty-common'
import {
  getCustomerOrdersResponseItem,
  GetCustomerOrdersResponseItem
} from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  limit?: number
} & Pick<User, 'email'>

export const getCustomerOrders = async ({ email, limit }: Params) => {
  const response = await supabase
    .from<GetCustomerOrdersResponseItem>(DB_TABLES.USERS)
    .select(
      `
        id,
        email,
        orders: ${DB_TABLES.ORDER}!customer_id (
          *
        )
      `
    )
    .eq('email', email)
    .limit(limit ?? 1000)

  const data = parseApiResponse(array(getCustomerOrdersResponseItem), response)

  return data
}
