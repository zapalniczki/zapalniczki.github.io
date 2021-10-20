import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import {
  getCollectionProductsResponseItem,
  GetCollectionProductsResponseItem
} from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  collectionId: string
}

const getCollectionProducts = async (params: Params) => {
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

export const useGetCollectionProducts = (params: Params) =>
  useQuery(['products', params], () => getCollectionProducts(params))
