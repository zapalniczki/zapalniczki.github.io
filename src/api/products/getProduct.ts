import { useQuery } from 'react-query'
import supabase from 'supabase'
import { Image } from './getProducts'

export type ProductDetails = {
  name: string
  id: string
  price: number
  description: string
  label: {
    label: string
    id: string
  }
  icon: {
    label: string
    id: string
  }
  collection: {
    label: string
    id: string
  }
  mold: {
    status: 'DONE' | 'IN_PROGRESS'
    id: string
  } | null
  mainImage: Pick<Image, 'thumbnail' | 'large' | 'basket'>
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
