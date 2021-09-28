import { useQuery } from 'react-query'
import supabase from 'supabase'
import { getProductsSelect, Product } from '../getProducts'

type Model = Product

const getFeatured = async () => {
  const { data, error } = await supabase
    .from<Model>('products')
    .select(getProductsSelect)
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

export const useGetFeatured = () => {
  return useQuery('products/featured', () => getFeatured())
}
