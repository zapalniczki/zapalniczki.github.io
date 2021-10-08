import { PRODUCT_TABLE } from 'constants/db_tables'
import { Collection, Icon, Label, Mold, Product } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { Image } from './getProducts'

export type GetProductResponse = Pick<
  Product,
  'description' | 'id' | 'name' | 'price'
> & {
  collection: Pick<Collection, 'id' | 'label'>
  description: string
  id: string
  image: Pick<Image, 'large' | 'basket' | 'thumbnail'>
  mold: Pick<Mold, 'id' | 'status'> & {
    icon: Pick<Icon, 'id' | 'label'>
    label: Pick<Label, 'id' | 'label'>
  }
  name: string
  price: number
}

const getProduct = async (id: string) => {
  const { data, error } = await supabase
    .from<GetProductResponse>(PRODUCT_TABLE)
    .select(
      `
      collection (
        label,
        id
      ),
      description,
      id,
      name,
      price,
      mold (
        id,
        status,
        label (
          id,
          label
        ),
        icon (
          id,
          label
        )
      ),
      image (
        basket,
        thumbnail,
        large
      )
      `
    )
    .eq('id', id)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getProduct')
  }

  return data
}

export const useGetProduct = (id: string) =>
  useQuery(['product', { id }], () => getProduct(id))
