import { MOLDS_TABLE } from 'constants/db_tables'
import { Mold, updateMoldResponse, UpdateMoldResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Mold, 'id' | 'status'>

export const updateMold = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateMoldResponse>(MOLDS_TABLE)
    .update({
      status: payload.status
    })
    .eq('id', payload.id)

  const data = parseApiResponse(updateMoldResponse, response)

  return data
}
