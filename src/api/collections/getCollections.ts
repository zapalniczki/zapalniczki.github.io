import { COLLECTIONS_TABLE } from 'constants/db_tables'
import { getCollectionsResponseItem, GetCollectionsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getCollections = async () => {
  const response = await supabase
    .from<GetCollectionsResponseItem>(COLLECTIONS_TABLE)
    .select()
    .eq('visible', true)

  const data = parseApiResponse(array(getCollectionsResponseItem), response)

  return data
}
