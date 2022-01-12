import { DB_TABLES } from 'braty-common'
import { GetMarketingsResponseItem, getMarketingsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getMarketings = async () => {
  const response = await supabase
    .from<GetMarketingsResponseItem>(DB_TABLES.MARKETING)
    .select('*')

  const data = parseApiResponse(array(getMarketingsResponseItem), response)

  return data
}
