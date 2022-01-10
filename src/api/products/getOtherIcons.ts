import { PRODUCTS_TABLE } from 'constants/db_tables'
import { getProductsResponseItem, GetProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'
import { getProductsSelectQuery } from '.'
import { Icon, Label } from 'braty-common'

type Params = {
  iconId: Icon['id']
  labelId: Label['id']
}

export const getOtherIcons = async (params: Params) => {
  const response = await supabase
    .from<GetProductsResponseItem>(PRODUCTS_TABLE)
    .select(getProductsSelectQuery)
    .eq('label_id', params.labelId)
    .neq('icon_id', params.iconId)
    .limit(3)

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}
