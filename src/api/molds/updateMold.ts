import { MOLD_TABLE_NAME } from 'api'
import { Mold, MoldStatus } from 'models'
import supabase from 'supabase'

type Payload = {
  id: string
  status: MoldStatus
}

const updateMold = async (payload: Payload) => {
  const { data, error } = await supabase
    .from<Mold>(MOLD_TABLE_NAME)
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
