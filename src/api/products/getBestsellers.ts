import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import { getBestsellersResponseItem, GetBestsellersResponseItem } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

const getBestsellers = async () => {
  const response = await supabase
    .from<GetBestsellersResponseItem>(PRODUCTS_TABLE)
    .select(
      `
    id,
    price,
    name,
    collection_id,
    visible,
    bestseller,
    ${IMAGES_TABLE} (
      *
    )
    `
    )
    .eq('bestseller', true)

  const data = parseApiResponse(array(getBestsellersResponseItem), response)

  return data
}

export const useGetBestsellers = () =>
  useQuery('bestsellers', () => getBestsellers())
