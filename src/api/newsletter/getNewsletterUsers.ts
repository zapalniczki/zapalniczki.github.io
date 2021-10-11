import { NEWSLETTER_TABLE } from 'constants/db_tables'
import { Newsletter } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

type GetNewsletterResponse = Newsletter

const getNewsletterUsers = async () => {
  const { data, error } = await supabase
    .from<GetNewsletterResponse>(NEWSLETTER_TABLE)
    .select()
    .order('updated_at')

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getNewsletterUsers')
  }

  return data
}

export const useGetNewsletterUsers = () =>
  useQuery(NEWSLETTER_TABLE, getNewsletterUsers)
