import { useMutation } from 'react-query'
import supabase from 'supabase'
import { Phone } from 'Types'

type AddNumberlPayload = {
  phone: Phone
}

const addNumber = async (payload: AddNumberlPayload) => {
  const { data, error } = await supabase.from('callback').insert({
    phone_number: payload.phone
  })

  if (error) {
    throw new Error(error.code)
  }

  return data
}

export const useAddNumber = () => useMutation(addNumber)

export default addNumber
