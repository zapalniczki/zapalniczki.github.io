import { DB_TABLES, Mold } from 'braty-common'
import { updateMoldResponse, UpdateMoldResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Payload = Pick<Mold, 'id' | 'status'>

export const updateMold = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateMoldResponse>(DB_TABLES.MOLDS)
    .update({
      status: payload.status
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updateMoldResponse, response)

  return data
}
