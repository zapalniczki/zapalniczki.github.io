import { MOLDS_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import {
  getProductsByIdResponseItem,
  GetProductsByIdResponseItem,
  Product
} from 'models'
import { useMutation, useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Payload = Product['id'][]

export const getProductsById = async (payload: Payload) => {
  const response = await supabase
    .from<GetProductsByIdResponseItem>(PRODUCTS_TABLE)
    .select(
      `
        id,
        price,
        mold: ${MOLDS_TABLE} (
          status
        )
      `
    )
    .in('id', payload)

  const data = parseApiResponse(array(getProductsByIdResponseItem), response)

  return data
}

export const useGetProductsById = () =>
  useQuery('products', () => getProductsById([]))
