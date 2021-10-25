import { NEWSLETTER_TABLE } from 'constants/db_tables'
import {
  getNewsletterUsersResponseItem,
  GetNewsletterUsersResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getNewsletterUsers = async () => {
  const response = await supabase
    .from<GetNewsletterUsersResponseItem>(NEWSLETTER_TABLE)
    .select()
    .order('updated_at')

  const data = parseApiResponse(array(getNewsletterUsersResponseItem), response)

  return data
}
