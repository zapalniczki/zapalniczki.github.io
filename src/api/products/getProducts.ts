import { Collection, DB_TABLES, Icon, Label, Product } from 'braty-common'
import { getProductsResponseItem, GetProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export type Params = {
  bestseller?: Product['bestseller']
  collectionId?: Collection['id']
  featured?: Product['featured']
  iconId?: Icon['id']
  labelId?: Label['id']
  limit?: number
  name_en?: Product['name_en']
  name_pl?: Product['name_pl']
}

export const getProducts = async (params: Params = {}) => {
  const match = getProductsMatch(params)
  const ilike = getProductsIlike(params)

  const response = await supabase
    .from<GetProductsResponseItem>(DB_TABLES.PRODUCTS)
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
price_pl,
price_en,
updated_at,
visible,
bestseller,
featured,
collection_id,
label_id,
name_pl,
name_en,
icon_id,
${DB_TABLES.IMAGES} (
  *
),
mold: ${DB_TABLES.MOLDS} (
  status
),
icon: ${DB_TABLES.ICONS} (
  label_pl,
  label_en
),
label: ${DB_TABLES.LABELS} (
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

export const getProductsIlike = (params: Params) => {
  if (params.name_en) {
    return {
      column: 'name_en' as const,
      patern: `%${params.name_en ? params.name_en : ''}%`
    }
  }

  return {
    column: 'name_pl' as const,
    patern: `%${params.name_pl ? params.name_pl : ''}%`
  }
}
