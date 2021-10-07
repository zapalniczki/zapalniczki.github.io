import { useMutation } from 'react-query'
import supabase from 'supabase'
import { Phone } from 'types'

type AddNumberPayload = {
  phone: Phone
}

const addCallback = async (payload: AddNumberPayload) => {
  const { data, error } = await supabase.from('callback').insert({
    phone_number: payload.phone
  })

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export const useAddCallback = () => useMutation(addCallback)

export default addCallback
