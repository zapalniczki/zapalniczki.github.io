import { ICONS_TABLE } from 'constants/db_tables'
import { getIconsResponseItem, GetIconsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getIcons = async () => {
  const response = await supabase
    .from<GetIconsResponseItem>(ICONS_TABLE)
    .select()

  const data = parseApiResponse(array(getIconsResponseItem), response)

  return data
}
