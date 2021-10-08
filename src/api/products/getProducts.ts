import { Product, Image as ImageModel } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

export type Image = {
  basket: string
  id: string
  large: string
  long: string
  thumbnail: string
  tile: string
}

export type GetProductsResponseItem = Pick<
  Product,
  'id' | 'price' | 'name' | 'collection_id' | 'visible'
> & {
  image: Pick<ImageModel, 'tile' | 'long'>
}

export const getProductSelect2 =
  'id, price, name, collection_id, image:image(tile, long), visible'

const getProducts = async () => {
  const { data, error } = await supabase
    .from<GetProductsResponseItem>('products')
    .select(getProductSelect2)
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
