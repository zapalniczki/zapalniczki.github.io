import { CALLBACK_TABLE } from 'constants/db_tables'
import { addCallbackResponse, AddCallbackResponse } from 'models'
import supabase from 'supabase'
import { Phone } from 'types/index2'
import { parseApiResponse } from 'utils'

type AddNumberPayload = {
  phone: Phone
}

export const addCallback = async (payload: AddNumberPayload) => {
  const response = await supabase
    .from<AddCallbackResponse>(CALLBACK_TABLE)
    .insert({
      phone_number: payload.phone
    })
    .single()

  const data = parseApiResponse(addCallbackResponse, response)

  return data
}
