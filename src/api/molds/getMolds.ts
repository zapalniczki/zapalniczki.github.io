import { ICONS_TABLE, LABELS_TABLE, MOLDS_TABLE } from 'constants/db_tables'
import { getMoldsResponseItem, GetMoldsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export const getMolds = async () => {
  const response = await supabase
    .from<GetMoldsResponseItem>(MOLDS_TABLE)
    .select(
      `id,
      created_at,
      updated_at,
      status,
      label: ${LABELS_TABLE}!label_id (
        label_pl,
        label_en
      ),
      icon: ${ICONS_TABLE}!icon_id (
        label_pl,
        label_en
      )
      `
    )

  const data = parseApiResponse(array(getMoldsResponseItem), response)

  return data
}
