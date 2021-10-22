import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import { GetProductsResponseItem, getProductsResponseItem } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

const getProducts = async () => {
  const response = await supabase.from<GetProductsResponseItem>(PRODUCTS_TABLE)
    .select(`
    id,
    price,
    name,
    collection_id,
    visible,
    ${IMAGES_TABLE} (
      *
    )
    `)

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}

export const useGetProducts = () => useQuery('products', getProducts)
