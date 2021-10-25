import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import { GetOtherPlacesResponseItem, getOtherPlacesResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  collectionId: string
  labelId: string
}

export const getOtherPlaces = async (params: Params) => {
  const response = await supabase
    .from<GetOtherPlacesResponseItem>(PRODUCTS_TABLE)
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
    .eq('collection_id', params.collectionId)
    .neq('label_id', params.labelId)
    .limit(3)

  const data = parseApiResponse(array(getOtherPlacesResponseItem), response)

  return data
}
