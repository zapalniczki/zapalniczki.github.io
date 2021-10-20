import { MOLDS_TABLE } from 'constants/db_tables'
import { Mold, MoldStatus } from 'models'
import supabase from 'supabase'

type Payload = {
  id: string
  status: MoldStatus
}

const updateMold = async (payload: Payload) => {
  const { data, error } = await supabase
    .from<Mold>(MOLDS_TABLE)
    .update({
      status: payload.status
    })
    .eq('id', payload.id)

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export default updateMold
