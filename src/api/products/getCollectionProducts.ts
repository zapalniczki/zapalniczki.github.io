import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductsSelect, Product } from '../getProducts'

type Model = Product

type Params = {
  collectionId: string
}

const getCollectionProducts = async (params: Params) => {
  const { data, error } = await supabase
    .from<Model>('products')
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

export const useGetCollectionProducts = (params: Params) => {
  return useQuery(['products', params], () => getCollectionProducts(params))
}
