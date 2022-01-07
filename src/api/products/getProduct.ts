import {
  ICONS_TABLE,
  IMAGES_TABLE,
  LABELS_TABLE,
  MOLDS_TABLE,
  PRODUCTS_TABLE
} from 'constants/db_tables'
import { GetProductResponse, getProductResponse, Product } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Params = {
  id: Product['id']
}

export const getProduct = async (params: Params) => {
  const response = await supabase
    .from<GetProductResponse>(PRODUCTS_TABLE)
    .select(
      `
      description_pl,
      description_en,
      id,
      price,
      collection_id,
      name,
      ${IMAGES_TABLE} (
        *
      ),
      mold: ${MOLDS_TABLE} (
        id,
        status
      ),
      icon: ${ICONS_TABLE} (
        label_pl,
        label_en,
        id
      ),
      label: ${LABELS_TABLE} (
        label_pl,
        label_en,
        id
      )
      `
    )
    .eq('id', params.id)
    .single()

  const data = parseApiResponse(getProductResponse, response)

  return data
}
