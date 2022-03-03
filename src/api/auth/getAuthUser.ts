import { supabase } from 'config'

export const getAuthUser = async () => {
  const user = supabase.auth.user()

  return user
}
