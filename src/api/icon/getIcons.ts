import { Icon } from 'models'
import supabase from 'supabase'

type GetIconsResponse = Icon

const getIcons = async () => {
  const { data, error } = await supabase
    .from<GetIconsResponse>('icons')
    .select()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getIcons')
  }

  return data
}

export default getIcons
