import { GetProductsResponseItem } from 'api'
import { PRODUCT_TABLE } from 'constants/db_tables'
import { Product } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductSelect2 } from './getProducts'

type GetFeaturedResponseItem = GetProductsResponseItem & {
  featured: Product['featured']
}

const getFeaturedSelect = getProductSelect2 + ', featured'

const getFeatured = async () => {
  const { data, error } = await supabase
    .from<GetFeaturedResponseItem>(PRODUCT_TABLE)
    .select(getFeaturedSelect)
    .eq('visible', true)
    .eq('featured', true)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getFeatured')
  }

  return data
}

export const useGetFeatured = () =>
  useQuery('product/featured', () => getFeatured())
