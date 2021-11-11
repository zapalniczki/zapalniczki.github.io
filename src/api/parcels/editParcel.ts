import { PARCELS_TABLE } from 'constants/db_tables'
import { editParcelResponse, EditParcelResponse, Parcel } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<Parcel, 'created_at' | 'updated_at'>

export const editParcel = async (payload: Payload) => {
  const response = await supabase
    .from<EditParcelResponse>(PARCELS_TABLE)
    .update({
      ref: payload.ref,
      link: payload.link
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(editParcelResponse, response)

  return data
}
