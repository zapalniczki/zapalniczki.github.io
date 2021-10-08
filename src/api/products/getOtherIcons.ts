import { Icon, Label, Product } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductsSelect } from './getProducts'

type GetOtherIconsResponse = Product & {
  icon_id: Pick<Icon, 'id'>
  label_id: Pick<Label, 'id'>
}

type Params = {
  iconId: string
  labelId: string
}

const getOtherIcons = async (params: Params) => {
  const { data, error } = await supabase
    .from<GetOtherIconsResponse>('products')
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

export const useGetOtherIcons = (params: Params) =>
  useQuery(['products', params], () => getOtherIcons(params))
