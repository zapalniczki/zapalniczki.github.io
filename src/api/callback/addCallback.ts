import { CALLBACK_TABLE } from 'constants/db_tables'
import { useMutation } from 'react-query'
import supabase from 'supabase'
import { Phone } from 'types'

type AddNumberPayload = {
  phone: Phone
}

const addCallback = async (payload: AddNumberPayload) => {
  const { data, error } = await supabase.from(CALLBACK_TABLE).insert({
    phone_number: payload.phone
  })

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export const useAddCallback = () => useMutation(addCallback)

export default addCallback
