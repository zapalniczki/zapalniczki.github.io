import { DB_TABLES, Marketing } from 'braty-common'
import { AddMarketingResponse, addMarketingResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'

type Payload = Omit<Marketing, 'id' | 'created_at' | 'updated_at'>

export const addMarketing = async (payload: Payload) => {
  const response = await supabase
    .from<AddMarketingResponse>(DB_TABLES.MARKETING)
    .insert({
      email: payload.email,
      is_test: payload.is_test,
      name: payload.name,
      notes: payload.notes,
      phone: payload.phone,
      plus_code: payload.plus_code,
      send_brochure_agreement: payload.send_brochure_agreement,
      status: payload.status
    })
    .single()

  const data = parseApiResponse(addMarketingResponse, response)

  return data
}
