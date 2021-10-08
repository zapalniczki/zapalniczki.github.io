import { Mold } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

export type Payload = Mold & {
  icon: {
    label: string
  }
  label: {
    label: string
  }
}

const getMolds = async () => {
  const { data, error } = await supabase
    .from<Payload>('molds')
    .select(
      'id, created_at, updated_at, status, label: labels(label), icon: icons(label)'
    )

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
