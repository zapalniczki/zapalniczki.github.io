import { getProductsResponseItem, GetProductsResponseItem } from 'models'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'
import {
  getProductsIlike,
  getProductsSelectQuery,
  getProductsMatch,
  Params as GetProductsParams
} from '.'
import { DB_TABLES } from 'braty-common'

type Params = GetProductsParams & {
  page: number
  size: number
}

export const getPaginatedProducts = async ({
  page,
  size,
  ...params
}: Params) => {
  const { from, to } = getPagination(page, size)

  const match = getProductsMatch(params)
  const ilike = getProductsIlike(params)

  const response = await supabase
    .from<GetProductsResponseItem>(DB_TABLES.PRODUCTS)
    .select(getProductsSelectQuery, { count: 'exact' })
    .eq('visible', true)
    .match(match)
    .ilike(ilike.column, ilike.patern)
    .range(from, to)
    .order('updated_at', { ascending: true })

  const data = parseApiResponse(array(getProductsResponseItem), response)
  const count = response.count ?? 0

  return {
    data,
    count,
    page,
    hasNextPage: size * (page + 1) < count
  }
}

const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3
  const from = page ? page * limit : 0
  const to = page ? from + size - 1 : size - 1

  return { from, to }
}
