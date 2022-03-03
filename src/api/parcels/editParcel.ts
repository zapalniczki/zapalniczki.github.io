import { DB_TABLES, Parcel } from 'braty-common'
import { editParcelResponse, EditParcelResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Payload = Omit<Parcel, 'created_at' | 'updated_at'>

export const editParcel = async (payload: Payload) => {
  const response = await supabase
    .from<EditParcelResponse>(DB_TABLES.PARCELS)
    .update({
      ref: payload.ref,
      link: payload.link
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(editParcelResponse, response)

  return data
}
