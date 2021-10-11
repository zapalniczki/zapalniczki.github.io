import { LABEL_TABLE } from 'constants/db_tables'
import { Label } from 'models'
import supabase from 'supabase'

type GetLabelResponse = Label

const getLabels = async () => {
  const { data, error } = await supabase
    .from<GetLabelResponse>(LABEL_TABLE)
    .select()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getLabels')
  }

  return data
}

export default getLabels
