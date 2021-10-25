import { LABELS_TABLE } from 'constants/db_tables'
import { getLabelsResponseItem, GetLabelsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getLabels = async () => {
  const response = await supabase
    .from<GetLabelsResponseItem>(LABELS_TABLE)
    .select()

  const data = parseApiResponse(array(getLabelsResponseItem), response)

  return data
}
