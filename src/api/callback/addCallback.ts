import { CALLBACK_TABLE } from 'constants/db_tables'
import { addCallbackResponse, AddCallbackResponse, Callback } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = {
  phone: Callback['phone_number']
}

export const addCallback = async (payload: Payload) => {
  const response = await supabase
    .from<AddCallbackResponse>(CALLBACK_TABLE)
    .insert({
      phone_number: payload.phone
    })
    .single()

  const data = parseApiResponse(addCallbackResponse, response)

  return data
}
