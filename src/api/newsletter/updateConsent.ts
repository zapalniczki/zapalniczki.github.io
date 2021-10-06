import { Newsletter } from 'models'
import { useMutation } from 'react-query'
import supabase from 'supabase'

type UpdateConsentPayload = {
  consent: boolean
  id: string
}

const updateConsent = async (payload: UpdateConsentPayload) => {
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

export const useUpdateConsent = () => {
  const { mutateAsync } = useMutation(updateConsent)

  return (params: UpdateConsentPayload) => mutateAsync(params)
}
