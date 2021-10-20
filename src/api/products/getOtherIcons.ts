import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import { getOtherIconsResponseItem, GetOtherIconsResponseItem } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  iconId: string
  labelId: string
}

const getOtherIcons = async (params: Params) => {
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

  const data = parseApiResponse(array(getOtherIconsResponseItem), response)

  return data
}

export const useGetOtherIcons = (params: Params) =>
  useQuery(['products', params], () => getOtherIcons(params))
