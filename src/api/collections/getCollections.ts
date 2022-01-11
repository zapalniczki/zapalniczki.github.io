import { DB_TABLES } from 'braty-common'
import { getCollectionsResponseItem, GetCollectionsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getCollections = async () => {
  const response = await supabase
    .from<GetCollectionsResponseItem>(DB_TABLES.COLLECTIONS)
    .select()
    .eq('visible', true)

  const data = parseApiResponse(array(getCollectionsResponseItem), response)

  return data
}
