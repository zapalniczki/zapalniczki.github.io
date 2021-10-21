import { ADDRESSES_TABLE } from 'constants/db_tables'
import { Address } from 'models'
import supabase from 'supabase'

type Payload = Omit<Address, 'created_at' | 'updated_at' | 'id'>

const addAddress = async (payload: Payload) => {
  const { data: address, error: addressError } = await supabase
    .from<Address>(ADDRESSES_TABLE)
    .upsert(payload)
    .single()

  if (addressError) {
    throw new Error(addressError.message)
  }

  if (!address) {
    throw new Error('addOrderSupabase/address error')
  }
}

export default addAddress
