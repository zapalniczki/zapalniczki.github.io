import { TypeOf } from 'zod'
import getProductsResponseItem from './getProductsResponseItem'

const getCollectionProductsResponseItem = getProductsResponseItem

export type GetCollectionProductsResponseItem = TypeOf<
  typeof getCollectionProductsResponseItem
>

export default getCollectionProductsResponseItem
