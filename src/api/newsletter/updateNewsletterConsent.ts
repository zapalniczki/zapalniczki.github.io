import { Newsletter } from 'models'
import supabase from 'supabase'

type UpdateConsentPayload = {
  consent: boolean
  id: string
}

const updateNewsletterConsent = async (payload: UpdateConsentPayload) => {
  const { data, error } = await supabase
    .from<Newsletter>('newsletter')
    .update({
      consent: payload.consent
    })
    .eq('id', payload.id)

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export default updateNewsletterConsent
