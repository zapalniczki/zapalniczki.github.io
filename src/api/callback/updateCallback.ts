import { Callback } from 'models'
import supabase from 'supabase'

type UpdateCallbackPayload = {
  done: boolean
  id: string
}

const updateCallback = async (payload: UpdateCallbackPayload) => {
  const { data, error } = await supabase
    .from<Callback>('callback')
    .update({
      done: payload.done
    })
    .eq('id', payload.id)

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export default updateCallback
