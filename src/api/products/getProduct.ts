import { useQuery } from 'react-query'
import supabase from 'supabase'
import { Image } from './getProducts'

export type ProductDetails = {
  collection: {
    id: string,
    label: string
  },
  description: string,
  icon: {
    id: string,
    label: string
  },
  id: string,
  label: {
    id: string,
    label: string
  }
  mainImage: Pick<Image, 'thumbnail' | 'large' | 'basket'>,
  mold: {
    id: string,
    status: 'DONE' | 'IN_PROGRESS'
  } | null,
  name: string,
  price: number
}

type GetProductPayload = {
  id: string
}

const getProduct = async ({ id }: GetProductPayload) => {
  const { data, error } = await supabase
    .from<ProductDetails>('products')
    .select(
      `
      id,
      price,
      name,
      description,
      label: labels (
        label,
        id
      ),
      icon: icons (
        label,
        id
      ),
      collection: collections (
        label,
        id
      ),
      mold: molds (
        status,
        id
      ),
      mainImage: image(
        large,
        thumbnail,
        basket
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

export const useGetProduct = (payload: GetProductPayload) => useQuery(['product', payload], () => getProduct(payload))
