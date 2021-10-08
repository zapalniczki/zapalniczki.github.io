import { Label, Product } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductsSelect } from './getProducts'

type Model = Product & {
  label_id: Pick<Label, 'id'>
}

type Params = {
  collectionId: string
  labelId: string
}

const getOtherPlaces = async (params: Params) => {
  const { data, error } = await supabase
    .from<Model>('products')
    .select(getProductsSelect)
    .filter('collection_id', 'eq', params.collectionId)
    .filter('label_id', 'neq', params.labelId)
    .eq('visible', true)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getOtherIcons')
  }

  return data
}

export const useGetOtherPlaces = (params: Params) =>
  useQuery(['products', params], () => getOtherPlaces(params))
