import { DB_TABLES } from 'braty-common'
import { getMoldsResponseItem, GetMoldsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getMolds = async () => {
  const response = await supabase
    .from<GetMoldsResponseItem>(DB_TABLES.MOLDS)
    .select(
      `id,
      created_at,
      updated_at,
      status,
      label: ${DB_TABLES.LABELS}!label_id (
        label_pl,
        label_en
      ),
      icon: ${DB_TABLES.ICONS}!icon_id (
        label_pl,
        label_en
      )
      `
    )

  const data = parseApiResponse(array(getMoldsResponseItem), response)

  return data
}
