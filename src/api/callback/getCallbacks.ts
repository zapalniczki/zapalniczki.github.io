import { CALLBACK_TABLE } from 'constants/db_tables'
import { GetCallbackResponseItem, getCallbacksResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getCallbacks = async () => {
  const response = await supabase
    .from<GetCallbackResponseItem>(CALLBACK_TABLE)
    .select()
    .order('updated_at')

  const data = parseApiResponse(array(getCallbacksResponseItem), response)

  return data
}
