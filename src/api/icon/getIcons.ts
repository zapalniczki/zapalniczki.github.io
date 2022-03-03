import { DB_TABLES } from 'braty-common'
import { getIconsResponseItem, GetIconsResponseItem } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getIcons = async () => {
  const response = await supabase
    .from<GetIconsResponseItem>(DB_TABLES.ICONS)
    .select()
    .eq('visible', true)

  const data = parseApiResponse(array(getIconsResponseItem), response)

  return data
}
