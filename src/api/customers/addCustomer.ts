import { DB_TABLES, Customer } from 'braty-common'
import { AddCustomerResponse, addCustomerResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Payload = Omit<Customer, 'created_at' | 'updated_at' | 'id'>

export const addCustomer = async (payload: Payload) => {
  const response = await supabase
    .from<AddCustomerResponse>(DB_TABLES.CUSTOMERS)
    .insert([payload])
    .single()

  const data = parseApiResponse(addCustomerResponse, response)

  return data
}
