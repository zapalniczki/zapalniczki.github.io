import { Callback, DB_TABLES } from 'braty-common'
import { updateCallbackResponse, UpdateCallbackResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Callback, 'done' | 'id'>

export const updateCallback = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateCallbackResponse>(DB_TABLES.CALLBACK)
    .update({
      done: payload.done
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updateCallbackResponse, response)

  return data
}
