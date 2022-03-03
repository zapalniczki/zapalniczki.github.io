import { supabase } from 'config'

export const getSession = async () => {
  const session = supabase.auth.session()

  return session
}
