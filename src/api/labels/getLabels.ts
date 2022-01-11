import { DB_TABLES } from 'braty-common'
import { getLabelsResponseItem, GetLabelsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getLabels = async () => {
  const response = await supabase
    .from<GetLabelsResponseItem>(DB_TABLES.LABELS)
    .select()

  const data = parseApiResponse(array(getLabelsResponseItem), response)

  return data
}
