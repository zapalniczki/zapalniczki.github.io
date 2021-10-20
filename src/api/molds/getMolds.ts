import { ICONS_TABLE, LABELS_TABLE, MOLDS_TABLE } from 'constants/db_tables'
import { Mold } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

export type GetMoldsResponseItem = Pick<
  Mold,
  'id' | 'created_at' | 'updated_at' | 'status'
> & {
  icon: {
    label: string
  }
  label: {
    label: string
  }
}

const getMolds = async () => {
  const { data, error } = await supabase
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

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getMolds')
  }

  return data
}

export const useGetMolds = () => useQuery(MOLDS_TABLE, getMolds)
