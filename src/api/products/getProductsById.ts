import { DB_TABLES, Product } from 'braty-common'
import { supabase } from 'config'
import {
  getProductsByIdResponseItem,
  GetProductsByIdResponseItem
} from 'models'
import { parseApiResponse } from 'utils'
import { array } from 'zod'
import { getProductsSelectQuery } from '.'

type Payload = Product['id'][]

export const getProductsById = async (payload: Payload) => {
  const response = await supabase
    .from<GetProductsByIdResponseItem>(DB_TABLES.PRODUCTS)
    .select(getProductsSelectQuery)
    .in('id', payload)

  const data = parseApiResponse(array(getProductsByIdResponseItem), response)

  return data
}
