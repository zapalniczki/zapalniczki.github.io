import { Customer } from 'braty-common'
import { supabase } from 'config'

type Payload = {
  email: Customer['email']
  password: string
}

export const signInWithEmailAndPassword = async (payload: Payload) => {
  const response = await supabase.auth.signIn(payload)

  if (response.error) {
    throw new Error(response.error.message)
  }

  return response
}
