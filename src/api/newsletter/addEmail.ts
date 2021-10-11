import { NEWSLETTER_TABLE } from 'constants/db_tables'
import { Newsletter } from 'models'
import { useMutation } from 'react-query'
import supabase from 'supabase'
import { Email } from 'types'

type AddEmailPayload = {
  email: Email
}

const addEmail = async (payload: AddEmailPayload) => {
  const { data, error } = await supabase
    .from<Newsletter>(NEWSLETTER_TABLE)
    .insert({
      consent: true,
      email: payload.email
    })

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export const useAddEmail = () => useMutation(addEmail)
