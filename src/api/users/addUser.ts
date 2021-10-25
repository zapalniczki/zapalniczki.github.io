import { USERS_TABLE } from 'constants/db_tables'
import { AddUserResponse, addUserResponse, User } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<User, 'created_at' | 'updated_at' | 'id'>

export const addUser = async (payload: Payload) => {
  const response = await supabase
    .from<AddUserResponse>(USERS_TABLE)
    .insert([payload])
    .single()

  const data = parseApiResponse(addUserResponse, response)

  return data
}
