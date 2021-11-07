import { PRODUCTS_TABLE } from 'constants/db_tables'
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

type Params = GetProductsParams & {
  page: number
}

export const getPaginatedProducts = async ({ page, ...params }: Params) => {
  const size = 9
  const { from, to } = getPagination(page, size)

  const match = getProductsMatch(params)
  const ilike = getProductsIlike(params)

  const response = await supabase
    .from<GetProductsResponseItem>(PRODUCTS_TABLE)
    .select(getProductsSelectQuery, { count: 'exact' })
    .match(match)
    .ilike(ilike.column, ilike.patern)
    .range(from, to)

  const data = parseApiResponse(array(getProductsResponseItem), response)

  const count = response.count ?? 0

  return {
    data,
    count: count,
    page: page,
    hasNextPage: size * (page + 1) < count
  }
}

const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3
  const from = page ? page * limit : 0
  const to = page ? from + size - 1 : size - 1

  return { from, to }
}
