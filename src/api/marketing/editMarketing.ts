import { DB_TABLES, Marketing } from 'braty-common'
import { editMarketingResponse, EditMarketingResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Omit<Marketing, 'updated_at' | 'created_at' | 'is_test'>

export const editMarketing = async (payload: Payload) => {
  const response = await supabase
    .from<EditMarketingResponse>(DB_TABLES.MARKETING)
    .update({
      email: payload.email,
      phone: payload.phone,
      notes: payload.notes,
      name: payload.name,
      plus_code: payload.plus_code,
      send_brochure_agreement: payload.send_brochure_agreement,
      sned_brochure_cyclic_agreement: payload.sned_brochure_cyclic_agreement
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(editMarketingResponse, response)

  return data
}
