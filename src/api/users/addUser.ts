import { DB_TABLES, User } from 'braty-common'
import { AddUserResponse, addUserResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<User, 'created_at' | 'updated_at' | 'id'>

export const addUser = async (payload: Payload) => {
  const response = await supabase
    .from<AddUserResponse>(DB_TABLES.USERS)
    .insert([payload])
    .single()

  const data = parseApiResponse(addUserResponse, response)

  return data
}
