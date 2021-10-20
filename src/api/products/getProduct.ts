import {
  ICONS_TABLE,
  IMAGES_TABLE,
  LABELS_TABLE,
  MOLDS_TABLE,
  PRODUCTS_TABLE
} from 'constants/db_tables'
import { GetProductResponse, getProductResponse } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

const getProduct = async (id: string) => {
  const response = await supabase
    .from<GetProductResponse>(PRODUCTS_TABLE)
    .select(
      `
      description,
      id,
      name,
      price,
      collection_id,
      ${IMAGES_TABLE} (
        *
      ),
      mold: ${MOLDS_TABLE} (
        id,
        status
      ),
      icon: ${ICONS_TABLE} (
        label,
        id
      ),
      label: ${LABELS_TABLE} (
        label,
        id
      )
      `
    )
    .eq('id', id)
    .single()

  const data = parseApiResponse(getProductResponse, response)

  return data
}

export const useGetProduct = (id: string) =>
  useQuery(['product', { id }], () => getProduct(id))
