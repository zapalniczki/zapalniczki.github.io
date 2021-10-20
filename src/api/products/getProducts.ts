import { IMAGES_TABLE, PRODUCTS_TABLE } from 'constants/db_tables'
import {
  Product,
  GetProductsResponseItem,
  getProductsResponseItem
} from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'
import { parseApiResponse } from 'utils'
import { array } from 'zod'

export type GetProductsResponseItemOLD = Pick<
  Product,
  'id' | 'price' | 'name' | 'collection_id' | 'visible'
>

export const getProductsSelect2 = `
  id,
  price,
  name,
  collection_id,
  visible,
  ${IMAGES_TABLE} (
    *
  )
  `

const getProducts = async () => {
  const response = await supabase.from<GetProductsResponseItem>(PRODUCTS_TABLE)
    .select(`
    id,
    price,
    name,
    collection_id,
    visible,
    ${IMAGES_TABLE} (
      *
    )
    `)

  const data = parseApiResponse(array(getProductsResponseItem), response)

  return data
}

export const getProductsSelectOLD =
  'id, price, name, label_id, icon_id, collection_id, mainImage:image(tile, long)'

export const useGetProducts = () => useQuery('products', getProducts)
