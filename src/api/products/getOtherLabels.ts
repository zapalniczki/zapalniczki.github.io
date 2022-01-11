import { getProductsResponseItem, GetProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'
import { getProductsSelectQuery } from '.'
import { DB_TABLES } from 'braty-common'

type Params = {
  collectionId: string
  labelId: string
}

export const getOtherLabels = async (params: Params) => {
  const response = await supabase
    .from<GetProductsResponseItem>(DB_TABLES.PRODUCTS)
    .select(getProductsSelectQuery)
    .eq('collection_id', params.collectionId)
    .neq('label_id', params.labelId)
    .limit(3)

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}
