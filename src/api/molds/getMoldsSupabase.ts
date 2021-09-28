import { useQuery } from 'react-query'
import supabase from 'supabase'

const getMolds = async () => {
  const { data, error } = await supabase.from('molds').select()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getMolds')
  }

  return data
}

export const useGetMolds = () => useQuery('molds', getMolds)
