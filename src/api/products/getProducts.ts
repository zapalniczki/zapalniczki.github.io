import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import { GetProductsResponseItem, getProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getProducts = async () => {
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
