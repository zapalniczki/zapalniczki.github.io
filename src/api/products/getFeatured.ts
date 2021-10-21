import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import { getFeaturedResponseItem, GetFeaturedResponseItem } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

const getFeatured = async () => {
  const response = await supabase
    .from<GetFeaturedResponseItem>(PRODUCTS_TABLE)
    .select(
      `
    id,
    price,
    name,
    collection_id,
    visible,
    featured,
    ${IMAGES_TABLE} (
      *
    )
    `
    )
    .eq('featured', true)

  const data = parseApiResponse(array(getFeaturedResponseItem), response)

  return data
}

export const useGetFeatured = () => useQuery('featured', () => getFeatured())