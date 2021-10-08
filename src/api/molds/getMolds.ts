import { ICON_TABLE_NAME, LABEL_TABLE_NAME, MOLD_TABLE_NAME } from 'api'
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
    .from<GetMoldsResponseItem>(MOLD_TABLE_NAME)
    .select(
      `id,
      created_at,
      updated_at,
      status,
      ${LABEL_TABLE_NAME} (
        label
      ),
      ${ICON_TABLE_NAME} (
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

export const useGetMolds = () => useQuery(getMoldsQueryKey, getMolds)

export const getMoldsQueryKey = 'molds'
