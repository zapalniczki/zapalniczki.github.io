import { ADDRESSES_TABLE, USERS_TABLE } from 'constants/db_tables'
import { GetUserResponse, getUserResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { User } from 'braty-common'

type Params = Pick<User, 'id'>

export const getUser = async ({ id }: Params) => {
  const response = await supabase
    .from<GetUserResponse>(USERS_TABLE)
    .select(
      `
        *,
        address: ${ADDRESSES_TABLE}!address_id (
          city,
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
