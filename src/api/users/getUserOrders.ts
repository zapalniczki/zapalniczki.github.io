import { DB_TABLES, User } from 'braty-common'
import { getUserOrdersResponseItem, GetUserOrdersResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  limit?: number
} & Pick<User, 'email'>

export const getUserOrders = async ({ email, limit }: Params) => {
  const response = await supabase
    .from<GetUserOrdersResponseItem>(DB_TABLES.USERS)
    .select(
      `
        id,
        email,
        orders: ${DB_TABLES.ORDER}!user_id (
          *
        )
      `
    )
    .eq('email', email)
    .limit(limit ?? 1000)

  const data = parseApiResponse(array(getUserOrdersResponseItem), response)

  return data
}
