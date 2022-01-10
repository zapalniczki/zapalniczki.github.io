import {
  ICONS_TABLE,
  IMAGES_TABLE,
  LABELS_TABLE,
  MOLDS_TABLE,
  PRODUCTS_TABLE
} from 'constants/db_tables'
import { getProductsResponseItem, GetProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'
import { Product, Collection, Icon, Label } from 'braty-common'

export type Params = {
  bestseller?: Product['bestseller']
  collectionId?: Collection['id']
  featured?: Product['featured']
  iconId?: Icon['id']
  labelId?: Label['id']
  limit?: number
  name?: Product['name']
}

export const getProducts = async (params: Params = {}) => {
  const match = getProductsMatch(params)
  const ilike = getProductsIlike(params)

  const response = await supabase
    .from<GetProductsResponseItem>(PRODUCTS_TABLE)
    .select(getProductsSelectQuery)
    .eq('visible', true)
    .match(match)
    .ilike(ilike.column, ilike.patern)
    .limit(params.limit ?? 1000)
    .order('updated_at', { ascending: false })

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}

export const getProductsSelectQuery = `
id,
price,
updated_at,
visible,
bestseller,
featured,
collection_id,
label_id,
name,
icon_id,
${IMAGES_TABLE} (
  *
),
mold: ${MOLDS_TABLE} (
  status
),
icon: ${ICONS_TABLE} (
  label_pl,
  label_en
),
label: ${LABELS_TABLE} (
  label_pl,
  label_en
)
`

export const getProductsMatch = (params: Params) => ({
  ...(params?.labelId && { label_id: params.labelId }),
  ...(params?.collectionId && { collection_id: params.collectionId }),
  ...(params?.iconId && { icon_id: params.iconId }),
  ...(params?.bestseller && { bestseller: params.bestseller }),
  ...(params?.featured && { featured: params.featured })
})

export const getProductsIlike = (params: Params) => ({
  column: 'name' as const,
  patern: `%${params.name ? params.name : ''}%`
})
