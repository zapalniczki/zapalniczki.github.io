import { CALLBACK_TABLE } from 'constants/db_tables'
import { updateCallbackResponse, UpdateCallbackResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { Callback } from 'braty-common'

type Payload = Pick<Callback, 'done' | 'id'>

export const updateCallback = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateCallbackResponse>(CALLBACK_TABLE)
    .update({
      done: payload.done
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updateCallbackResponse, response)

  return data
}
