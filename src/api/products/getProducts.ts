import { useQuery } from 'react-query'
import supabase from 'supabase'

export type Image = {
  basket: string,
  id: string,
  large: string,
  long: string,
  thumbnail: string,
  tile: string
}

export type Product = {
  collection_id: string,
  featured: boolean | null,
  icon_id: string,
  id: string,
  label_id: string,
  mainImage: Pick<Image, 'tile' | 'long'>,
  name: string,
  price: number,
  visible: boolean | null
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
