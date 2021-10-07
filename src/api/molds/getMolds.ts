import { Mold } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

type GetMoldsResponse = Mold

const getMolds = async () => {
  const { data, error } = await supabase
    .from<GetMoldsResponse>('molds')
    .select()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getMolds')
  }

  return data
}

export const useGetMolds = () => useQuery(getMoldsQueryKey, getMolds)

export const getMoldsQueryKey = 'molds'
