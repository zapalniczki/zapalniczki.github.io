import { useMutation } from 'react-query'
import supabase from 'supabase'
import { Email } from 'Types'

type AddEmailPayload = {
  email: Email
}

const addEmail = async (payload: AddEmailPayload) => {
  const { data, error } = await supabase.from('newsletter').insert({
    consent: true,
    email: payload.email
  })

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export const useAddEmail = () => {
  return useMutation(addEmail)
}
