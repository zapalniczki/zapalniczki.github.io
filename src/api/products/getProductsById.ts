import { PRODUCTS_TABLE } from 'constants/db_tables'
import {
  getProductsByIdResponseItem,
  GetProductsByIdResponseItem,
  Product
} from 'models'
import { useMutation, useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

type Params = {
  ids: Product['id'][]
}

const getProductsById = async ({ ids }: Params) => {
  const response = await supabase.from<GetProductsByIdResponseItem>(
    PRODUCTS_TABLE
  ).select(`
      price
    `)

  console.log(ids)

  const data = parseApiResponse(array(getProductsByIdResponseItem), response)

  return data
}

export const useGetProductsById = (params: Params) =>
  useQuery('products', () => getProductsById(params))

export const useGetProductsById2 = (params: Params) => {
  const { mutateAsync } = useMutation(getProductsById)

  return () => mutateAsync(params)
}
