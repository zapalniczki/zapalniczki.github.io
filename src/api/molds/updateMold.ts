import { Mold } from 'models'
import supabase from 'supabase'

type Payload = {
  id: string
  status: Mold['status']
}

const updateMold = async (payload: Payload) => {
  const { data, error } = await supabase
    .from<Mold>('molds')
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
