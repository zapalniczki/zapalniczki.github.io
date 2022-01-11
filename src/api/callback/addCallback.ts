import { Callback, DB_TABLES } from 'braty-common'
import { addCallbackResponse, AddCallbackResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = {
  phone: Callback['phone_number']
}

export const addCallback = async (payload: Payload) => {
  const response = await supabase
    .from<AddCallbackResponse>(DB_TABLES.CALLBACK)
    .insert({
      phone_number: payload.phone
    })
    .single()

  const data = parseApiResponse(addCallbackResponse, response)

  return data
}
