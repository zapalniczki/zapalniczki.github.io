import { Collection, DB_TABLES, Icon, Label, Product } from 'braty-common'
import { getProductsResponseItem, GetProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export type Params = {
  bestseller?: Product['bestseller']
  collectionKey?: Collection['key']
  featured?: Product['featured']
  iconKey?: Icon['key'] | null
  labelKey?: Label['key']
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
bestseller,
collection_key,
featured,
icon_key,
id,
label_key,
name_en,
name_pl,
price_en,
price_pl,
updated_at,
visible,
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
  key
)
`

export const getProductsMatch = (params: Params) => ({
  ...(params?.labelKey && { label_key: params.labelKey }),
  ...(params?.collectionKey && { collection_key: params.collectionKey }),
  ...(params?.iconKey && { icon_key: params.iconKey }),
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
