import { getProductsResponseItem, GetProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'
import { getProductsSelectQuery } from '.'
import { Collection, DB_TABLES, Label } from 'braty-common'

type Params = {
  collectionKey: Collection['key']
  labelKey: Label['key']
}

export const getOtherLabels = async (params: Params) => {
  const response = await supabase
    .from<GetProductsResponseItem>(DB_TABLES.PRODUCTS)
    .select(getProductsSelectQuery)
    .eq('collection_key', params.collectionKey)
    .neq('label_key', params.labelKey)
    .limit(3)

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}
