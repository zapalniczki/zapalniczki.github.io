import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import {
  getLabelProductsResponseItem,
  GetLabelProductsResponseItem,
  Label
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  labelId: Label['id']
}

export const getLabelProducts = async (params: Params) => {
  const response = await supabase
    .from<GetLabelProductsResponseItem>(PRODUCTS_TABLE)
    .select(
      `
    id,
    price,
    name,
    collection_id,
    visible,
    label_id,
    ${IMAGES_TABLE} (
      *
    )
    `
    )
    .filter('label_id', 'eq', params.labelId)

  const data = parseApiResponse(array(getLabelProductsResponseItem), response)

  return data
}
