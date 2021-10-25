import { NEWSLETTER_TABLE } from 'constants/db_tables'
import { addEmailResponse, AddEmailResponse, Newsletter } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = {
  email: Newsletter['email']
}

export const addEmail = async (payload: Payload) => {
  const response = await supabase
    .from<AddEmailResponse>(NEWSLETTER_TABLE)
    .insert({
      consent: true,
      email: payload.email
    })
    .single()

  const data = parseApiResponse(addEmailResponse, response)

  return data
}
