import { PRODUCTS_TABLE } from 'constants/db_tables'
import {
  getProductsByIdResponseItem,
  GetProductsByIdResponseItem
} from 'models'
import { useMutation, useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

const getProductsById = async () => {
  const response = await supabase.from<GetProductsByIdResponseItem>(
    PRODUCTS_TABLE
  ).select(`
      price
    `)

  const data = parseApiResponse(array(getProductsByIdResponseItem), response)

  return data
}

export const useGetProductsById = () =>
  useQuery('products', () => getProductsById())

export const useGetProductsById2 = () => {
  const { mutateAsync } = useMutation(getProductsById)

  return () => mutateAsync()
}
