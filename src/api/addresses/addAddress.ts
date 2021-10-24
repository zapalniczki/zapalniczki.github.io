import { ADDRESSES_TABLE } from 'constants/db_tables'
import { addAddressResponse, AddAddressResponse, Address } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<Address, 'created_at' | 'updated_at' | 'id'>

export const addAddress = async (payload: Payload) => {
  const response = await supabase
    .from<AddAddressResponse>(ADDRESSES_TABLE)
    .upsert(payload)
    .single()

  const data = parseApiResponse(addAddressResponse, response)

  return data
}
