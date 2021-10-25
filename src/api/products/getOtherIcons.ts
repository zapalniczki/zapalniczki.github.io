import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import {
  getOtherIconsResponseItem,
  GetOtherIconsResponseItem,
  Icon,
  Label
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  iconId: Icon['id']
  labelId: Label['id']
}

export const getOtherIcons = async (params: Params) => {
  const response = await supabase
    .from<GetOtherIconsResponseItem>(PRODUCTS_TABLE)
    .select(
      `
    id,
    price,
    name,
    collection_id,
    visible,
    icon_id,
    label_id,
    ${IMAGES_TABLE} (
      *
    )
    `
    )
    .eq('label_id', params.labelId)
    .neq('icon_id', params.iconId)
    .limit(3)

  const data = parseApiResponse(array(getOtherIconsResponseItem), response)

  return data
}
