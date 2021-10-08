import { PRODUCT_TABLE } from 'constants/db_tables'
import { Product } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductsSelect } from './getProducts'

type GetCollectionProductResponse = Product

type Params = {
  collectionId: string
}

const getCollectionProducts = async (params: Params) => {
  const { data, error } = await supabase
    .from<GetCollectionProductResponse>(PRODUCT_TABLE)
    .select(getProductsSelect)
    .filter('collection_id', 'eq', params.collectionId)
    .eq('visible', true)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getCollectionProducts')
  }

  return data
}

export const useGetCollectionProducts = (params: Params) =>
  useQuery(['product', params], () => getCollectionProducts(params))
