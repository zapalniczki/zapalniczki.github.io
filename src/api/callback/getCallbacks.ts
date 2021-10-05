import { Callback } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

type GetCallbacksResponse = Callback

const getCallbacks = async () => {
  const { data, error } = await supabase
    .from<GetCallbacksResponse>('callback')
    .select()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getCallbacks')
  }

  return data
}

export const useGetCallbacks = () => useQuery('callbacks', getCallbacks)
