import supabase from 'supabase'

export const getSession = async () => {
  const session = supabase.auth.session()

  return session
}
