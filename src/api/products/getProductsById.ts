import {
  getProductsByIdResponseItem,
  GetProductsByIdResponseItem
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'
import { getProductsSelectQuery } from '.'
import { Product } from 'braty-common'
import { DB_TABLES } from 'braty-common'

type Payload = Product['id'][]

export const getProductsById = async (payload: Payload) => {
  const response = await supabase
    .from<GetProductsByIdResponseItem>(DB_TABLES.PRODUCTS)
    .select(getProductsSelectQuery)
    .in('id', payload)

  const data = parseApiResponse(array(getProductsByIdResponseItem), response)

  return data
}
