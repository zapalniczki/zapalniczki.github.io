import supabase from 'supabase'

export const getAuthUser = async () => {
  const user = supabase.auth.user()

  return user
}
