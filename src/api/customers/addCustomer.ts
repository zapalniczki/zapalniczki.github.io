import { DB_TABLES, User } from 'braty-common'
import { AddCustomerResponse, addCustomerResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Payload = Omit<User, 'created_at' | 'updated_at' | 'id'>

export const addCustomer = async (payload: Payload) => {
  const response = await supabase
    .from<AddCustomerResponse>(DB_TABLES.USERS)
    .insert([payload])
    .single()

  const data = parseApiResponse(addCustomerResponse, response)

  return data
}
