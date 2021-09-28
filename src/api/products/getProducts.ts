import { useQuery } from 'react-query'
import supabase from 'supabase'

export type Image = {
  id: string
  large: string
  tile: string
  thumbnail: string
  basket: string
  long: string
}

export type Product = {
  name: string
  id: string
  price: number
  label_id: string
  icon_id: string
  collection_id: string
  mainImage: Pick<Image, 'tile' | 'long'>
  visible: boolean | null
  featured: boolean | null
}

const getProducts = async () => {
  const { data, error } = await supabase
    .from<Product>('products')
    .select(getProductsSelect)
    .eq('visible', true)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getProducts')
  }

  return data
}

export const getProductsSelect =
  'id, price, name, label_id, icon_id, collection_id, mainImage:image(tile, long)'

export const useGetProducts = () => useQuery('products', getProducts)
