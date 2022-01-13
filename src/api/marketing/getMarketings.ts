import { DB_TABLES, Marketing } from 'braty-common'
import { GetMarketingsResponseItem, getMarketingsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = Pick<Marketing, 'is_test'>

export const getMarketings = async ({ is_test }: Params) => {
  const response = await supabase
    .from<GetMarketingsResponseItem>(DB_TABLES.MARKETING)
    .select('*')
    .order('updated_at', { ascending: false })
    .filter('is_test', 'eq', is_test)

  const data = parseApiResponse(array(getMarketingsResponseItem), response)

  return data
}
