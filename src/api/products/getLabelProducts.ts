import { PRODUCT_TABLE } from 'constants/db_tables'
import { Label, Product } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductsSelect } from './getProducts'

type Model = Product & {
  label_id: Pick<Label, 'id'>
}

type Params = {
  labelId: string
}

const getLabelProducts = async (params: Params) => {
  const { data, error } = await supabase
    .from<Model>(PRODUCT_TABLE)
    .select(getProductsSelect)
    .filter('label_id', 'eq', params.labelId)
    .eq('visible', true)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getLabelProduct')
  }

  return data
}

export const useGetLabelProducts = (params: Params) =>
  useQuery(['product', params], () => getLabelProducts(params))
