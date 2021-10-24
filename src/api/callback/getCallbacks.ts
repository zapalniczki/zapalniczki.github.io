import { CALLBACK_TABLE } from 'constants/db_tables'
import { Callback } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

type GetCallbacksResponse = Callback

export const getCallbacks = async () => {
  const { data, error } = await supabase
    .from<GetCallbacksResponse>(CALLBACK_TABLE)
    .select()
    .order('updated_at')

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getCallbacks')
  }

  return data
}

export const useGetCallbacks = () => useQuery(CALLBACK_TABLE, getCallbacks)
