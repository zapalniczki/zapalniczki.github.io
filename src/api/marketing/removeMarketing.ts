import { DB_TABLES, Marketing } from 'braty-common'
import { RemoveMarketingResponse, removeMarketingResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Payload = Pick<Marketing, 'id'>

export const removeMarketing = async (payload: Payload) => {
  const response = await supabase
    .from<RemoveMarketingResponse>(DB_TABLES.MARKETING)
    .delete()
    .eq('id', payload.id)

  const data = parseApiResponse(array(removeMarketingResponse), response)

  return data
}
