import { PARCELS_TABLE } from 'constants/db_tables'
import { addParcelResponse, AddParcelResponse, Parcel } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<Parcel, 'created_at' | 'updated_at' | 'id'>

export const addParcel = async (payload: Payload) => {
  const response = await supabase
    .from<AddParcelResponse>(PARCELS_TABLE)
    .insert(payload)
    .single()

  const data = parseApiResponse(addParcelResponse, response)

  return data
}
