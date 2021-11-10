import { User } from 'models'
import supabase from 'supabase'

type Payload = {
  email: User['email']
  password: string
}

export const signInWithEmailAndPassword = async (payload: Payload) => {
  const response = await supabase.auth.signIn(payload)

  if (response.error) {
    throw new Error(response.error.message)
  }

  return response
}
