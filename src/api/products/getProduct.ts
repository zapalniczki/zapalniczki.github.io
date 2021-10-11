import {
  COLLECTION_TABLE,
  ICON_TABLE,
  IMAGE_TABLE,
  LABEL_TABLE,
  MOLD_TABLE,
  PRODUCT_TABLE
} from 'constants/db_tables'
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
      ${COLLECTION_TABLE} (
        id,
        label
      ),
      description,
      id,
      name,
      price,
      ${MOLD_TABLE} (
        id,
        status,
        ${LABEL_TABLE} (
          id,
          label
        ),
        ${ICON_TABLE} (
          id,
          label
        )
      ),
      ${IMAGE_TABLE} (
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
