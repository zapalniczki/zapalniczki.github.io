import { IMAGES_TABLE, MOLDS_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import {
  getProductsByIdResponseItem,
  GetProductsByIdResponseItem,
  Product
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Payload = Product['id'][]

export const getProductsById = async (payload: Payload) => {
  const response = await supabase
    .from<GetProductsByIdResponseItem>(PRODUCTS_TABLE)
    .select(
      `
      id,
      price,
      name,
      visible,
      bestseller,
      featured,
      collection_id,
      label_id,
      icon_id,
      ${IMAGES_TABLE} (
        *
      ),
      mold: ${MOLDS_TABLE} (
        status
      )
      `
    )
    .in('id', payload)

  const data = parseApiResponse(array(getProductsByIdResponseItem), response)

  return data
}
