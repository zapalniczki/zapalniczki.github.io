import { User } from 'models'
import supabase from 'supabase'

type Payload = {
  email: User['email']
  password: string
}

export const signUp = async (payload: Payload) => {
  const response = await supabase.auth.signUp(payload)

  if (response.error) {
    throw new Error(response.error.message)
  }

  return response
}
