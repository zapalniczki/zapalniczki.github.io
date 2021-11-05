import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import {
  Collection,
  getProductsResponseItem,
  GetProductsResponseItem,
  Icon,
  Label,
  Product
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  bestseller?: Product['bestseller']
  collectionId?: Collection['id']
  featured?: Product['featured']
  iconId?: Icon['id']
  labelId?: Label['id']
}

export const getProducts = async (params: Params = {}) => {
  const response = await supabase
    .from<GetProductsResponseItem>(PRODUCTS_TABLE)
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
    )
    `
    )
    .match({
      ...(params?.labelId && { label_id: params.labelId }),
      ...(params?.collectionId && { collection_id: params.collectionId }),
      ...(params?.iconId && { icon_id: params.iconId }),
      ...(params?.bestseller && { bestseller: params.bestseller }),
      ...(params?.featured && { featured: params.featured })
    })

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}
