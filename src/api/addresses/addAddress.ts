import { Address, DB_TABLES } from 'braty-common'
import { addAddressResponse, AddAddressResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Payload = Omit<Address, 'created_at' | 'updated_at' | 'id'>

export const addAddress = async (payload: Payload) => {
  const response = await supabase
    .from<AddAddressResponse>(DB_TABLES.ADDRESSES)
    .upsert(payload)
    .single()

  const data = parseApiResponse(addAddressResponse, response)

  return data
}
