import { GetUserResponse, getUserResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { User, DB_TABLES } from 'braty-common'

type Params = Pick<User, 'id'>

export const getUser = async ({ id }: Params) => {
  const response = await supabase
    .from<GetUserResponse>(DB_TABLES.USERS)
    .select(
      `
        *,
        address: ${DB_TABLES.ADDRESSES}!address_id (
          city,
          country,
          post_code,
          street_address
        )
      `
    )
    .eq('id', id)
    .single()

  const data = parseApiResponse(getUserResponse, response)

  return data
}
