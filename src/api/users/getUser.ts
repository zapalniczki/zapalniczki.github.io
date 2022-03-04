import { DB_TABLES, User } from 'braty-common'
import { GetUserResponse, getUserResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Params = Pick<User, 'id'>

export const getUser = async (params: Params) => {
  const response = await supabase
    .from<GetUserResponse>(DB_TABLES.USERS)
    .select()
    .eq('id', params.id)
    .single()

  const data = parseApiResponse(getUserResponse, response)

  return data
}
