import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductsSelect, Product } from './getProducts'

type Model = Product

type Params = {
  iconId: string
  labelId: string
}

const getOtherIcons = async (params: Params) => {
  const { data, error } = await supabase
    .from<Model>('products')
    .select(getProductsSelect)
    .filter('label_id', 'eq', params.labelId)
    .filter('icon_id', 'neq', params.iconId)
    .eq('visible', true)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getOtherIcons')
  }

  return data
}

export const useGetOtherIcons = (params: Params) => {
  return useQuery(['products', params], () => getOtherIcons(params))
}
