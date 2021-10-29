import { NEWSLETTER_TABLE } from 'constants/db_tables'
import {
  Newsletter,
  updateNewsletterConsentResponse,
  UpdateNewsletterConsentResponse
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Payload = Pick<Newsletter, 'id' | 'consent'>

export const updateNewsletterConsent = async (payload: Payload) => {
  const response = await supabase
    .from<UpdateNewsletterConsentResponse>(NEWSLETTER_TABLE)
    .update({
      consent: payload.consent
    })
    .eq('id', payload.id)
    .single()

  const data = parseApiResponse(updateNewsletterConsentResponse, response)

  return data
}
