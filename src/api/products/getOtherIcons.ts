import { getProductsResponseItem, GetProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'
import { getProductsSelectQuery } from '.'
import { Icon, Label } from 'braty-common'
import { DB_TABLES } from 'braty-common'

type Params = {
  iconKey: Icon['key']
  labelKey: Label['key']
}

export const getOtherIcons = async (params: Params) => {
  const response = await supabase
    .from<GetProductsResponseItem>(DB_TABLES.PRODUCTS)
    .select(getProductsSelectQuery)
    .eq('label_key', params.labelKey)
    .eq('visible', true)
    .neq('icon_key', params.iconKey)
    .limit(3)

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}
