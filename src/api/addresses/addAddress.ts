import { ADDRESSES_TABLE } from 'constants/db_tables'
import { addAddressResponse, AddAddressResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { Address } from 'braty-common'

type Payload = Omit<Address, 'created_at' | 'updated_at' | 'id'>

export const addAddress = async (payload: Payload) => {
  const response = await supabase
    .from<AddAddressResponse>(ADDRESSES_TABLE)
    .upsert(payload)
    .single()

  const data = parseApiResponse(addAddressResponse, response)

  return data
}
