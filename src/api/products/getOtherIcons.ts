import { GetProductsResponseItem } from 'api'
import { PRODUCT_TABLE } from 'constants/db_tables'
import { Icon, Label } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductsSelect } from './getProducts'

type GetOtherIconsResponse = GetProductsResponseItem & {
  icon_id: Pick<Icon, 'id'>
  label_id: Pick<Label, 'id'>
}

type Params = {
  iconId: string
  labelId: string
}

const getOtherIcons = async (params: Params) => {
  const { data, error } = await supabase
    .from<GetOtherIconsResponse>(PRODUCT_TABLE)
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
  useQuery(['product', params], () => getOtherIcons(params))
