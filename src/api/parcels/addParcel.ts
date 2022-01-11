import { DB_TABLES, Parcel } from 'braty-common'
import { addParcelResponse, AddParcelResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<Parcel, 'created_at' | 'updated_at' | 'id'>

export const addParcel = async (payload: Payload) => {
  const response = await supabase
    .from<AddParcelResponse>(DB_TABLES.PARCELS)
    .insert(payload)
    .single()

  const data = parseApiResponse(addParcelResponse, response)

  return data
}
