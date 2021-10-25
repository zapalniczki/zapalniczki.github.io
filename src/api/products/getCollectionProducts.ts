import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import {
  Collection,
  getCollectionProductsResponseItem,
  GetCollectionProductsResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  collectionId: Collection['id']
}

export const getCollectionProducts = async (params: Params) => {
  const response = await supabase
    .from<GetCollectionProductsResponseItem>(PRODUCTS_TABLE)
    .select(
      `
    id,
    price,
    name,
    collection_id,
    visible,
    ${IMAGES_TABLE} (
      *
    )
    `
    )
    .filter('collection_id', 'eq', params.collectionId)

  const data = parseApiResponse(
    array(getCollectionProductsResponseItem),
    response
  )

  return data
}
