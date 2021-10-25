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
      ${LABELS_TABLE} (
        label
      ),
      ${ICONS_TABLE} (
        label
      )
      `
    )

  const data = parseApiResponse(array(getMoldsResponseItem), response)

  return data
}
