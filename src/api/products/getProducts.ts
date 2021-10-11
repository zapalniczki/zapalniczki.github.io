import { IMAGE_TABLE, PRODUCT_TABLE } from 'constants/db_tables'
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

export const getProductsSelect2 = `
  id,
  price,
  name,
  collection_id,
  visible,
  ${IMAGE_TABLE} (
    tile,
    long
  )
  `

const getProducts = async () => {
  const { data, error } = await supabase
    .from<GetProductsResponseItem>(PRODUCT_TABLE)
    .select(getProductsSelect2)
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

export const useGetProducts = () => useQuery('product', getProducts)
