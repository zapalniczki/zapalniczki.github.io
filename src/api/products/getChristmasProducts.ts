import { IMAGES_TABLE, MOLDS_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import {
  Collection,
  getProductsResponseItem,
  GetProductsResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  collectionId: Collection['id']
  newYear?: boolean
  short?: boolean
}

export const getChristmasProducts = async (params: Params) => {
  const from = params.newYear ? 6 : 0
  const to = params.newYear ? 1000 : 6

  const limit = params.short ? 3 : 1000

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
    .eq('collection_id', params.collectionId)
    .range(from, to)
    .limit(limit)

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}
