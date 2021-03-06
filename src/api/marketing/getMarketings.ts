import { DB_TABLES, Marketing } from 'braty-common'
import { GetMarketingsResponseItem, getMarketingsResponseItem } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = Pick<Marketing, 'is_test' | 'status'>

export const getMarketings = async ({ is_test, status }: Params) => {
  const response = await supabase
    .from<GetMarketingsResponseItem>(DB_TABLES.MARKETING)
    .select('*')
    .order('updated_at', { ascending: false })
    .filter('is_test', 'eq', is_test)
    .eq('status', status)

  const data = parseApiResponse(array(getMarketingsResponseItem), response)

  return data
}
