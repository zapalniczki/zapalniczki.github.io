import { CALLBACK_TABLE } from 'constants/db_tables'
import {
  Callback,
  updateCallbackResponse,
  UpdateCallbackResponse
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Callback, 'done' | 'id'>

export const updateCallback = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateCallbackResponse>(CALLBACK_TABLE)
    .update({
      done: payload.done
    })
    .eq('id', payload.id)

  const data = parseApiResponse(updateCallbackResponse, response)

  return data
}
