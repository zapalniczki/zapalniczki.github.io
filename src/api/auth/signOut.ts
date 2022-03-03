import { supabase } from 'config'

export const signOut = async () => {
  const response = await supabase.auth.signOut()

  return response
}
