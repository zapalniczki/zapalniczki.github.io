import { IMAGES_TABLE, MOLDS_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import { getProductsResponseItem, GetProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  newYear?: boolean
}

export const getChristmasProducts = async (params: Params) => {
  const from = params.newYear ? 6 : 0
  const to = params.newYear ? 1000 : 6

  const response = await supabase
    .from<GetProductsResponseItem>(PRODUCTS_TABLE)
    .select(
      `
      id,
      price,
      name,
      visible,
      bestseller,
      featured,
      collection_id,
      label_id,
      icon_id,
      ${IMAGES_TABLE} (
        *
      ),
      mold: ${MOLDS_TABLE} (
        status
      )
    `
    )
    .eq('collection_id', '3eb90808-0d57-4173-ac0a-2fb8bc66c049')
    .range(from, to)

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}
