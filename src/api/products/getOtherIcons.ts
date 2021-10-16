import { GetProductsResponseItem } from 'api'
import {
  ICON_TABLE,
  LABEL_TABLE,
  MOLD_TABLE,
  PRODUCT_TABLE
} from 'constants/db_tables'
import { Icon, Label } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductsSelect2 } from './getProducts'

type GetOtherIconsResponse = GetProductsResponseItem & {
  mold: {
    icon: Pick<Icon, 'label' | 'id'>
    label: Pick<Label, 'label' | 'id'>
  }
}

type Params = {
  iconId: string
  labelId: string
}

const getOtherIconsSelect =
  getProductsSelect2 +
  `
  ,
  ${MOLD_TABLE} (
    ${LABEL_TABLE} (
      label,
      id
    ),
    ${ICON_TABLE} (
      label,
      id
    )
  )
`

const getOtherIcons = async (params: Params) => {
  const { data, error } = await supabase
    .from<GetOtherIconsResponse>(PRODUCT_TABLE)
    .select(getOtherIconsSelect)
    .filter('mold', 'eq', params.labelId)
    // .filter('icon_id',  'neq', params.iconId)
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
