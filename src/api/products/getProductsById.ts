import { PRODUCTS_TABLE } from 'constants/db_tables'
import {
  getProductsByIdResponseItem,
  GetProductsByIdResponseItem,
  Product
} from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'
import { getProductsSelectQuery } from '.'

type Payload = Product['id'][]

export const getProductsById = async (payload: Payload) => {
  const response = await supabase
    .from<GetProductsByIdResponseItem>(PRODUCTS_TABLE)
    .select(getProductsSelectQuery)
    .in('id', payload)

  const data = parseApiResponse(array(getProductsByIdResponseItem), response)

  return data
}
