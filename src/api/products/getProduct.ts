import { DB_TABLES, Product } from 'braty-common'
import { GetProductResponse, getProductResponse } from 'models'
import { supabase } from 'config'
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
      price_pl,
      price_en,
      name_pl,
      name_en,
      visible,
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
        key
      ),
      collection: ${DB_TABLES.COLLECTIONS} (
        label_pl,
        label_en,
        key
      ),
      label: ${DB_TABLES.LABELS} (
        key
      )
      `
    )
    .eq('id', params.id)
    .single()

  const data = parseApiResponse(getProductResponse, response)

  return data
}
