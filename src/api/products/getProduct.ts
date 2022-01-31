import { DB_TABLES, Product } from 'braty-common'
import { GetProductResponse, getProductResponse } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'

type Params = {
  id: Product['id']
}

export const getProduct = async (params: Params) => {
  const response = await supabase
    .from<GetProductResponse>(DB_TABLES.PRODUCTS)
    .select(
      `
      description_pl,
      description_en,
      id,
      price,
      name_pl,
      name_en,
      ${DB_TABLES.IMAGES} (
        *
      ),
      mold: ${DB_TABLES.MOLDS} (
        id,
        status
      ),
      icon: ${DB_TABLES.ICONS} (
        label_pl,
        label_en,
        id
      ),
      collection: ${DB_TABLES.COLLECTIONS} (
        label_pl,
        label_en,
        id
      ),
      label: ${DB_TABLES.LABELS} (
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
