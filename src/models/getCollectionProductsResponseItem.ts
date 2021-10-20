import { getProductsResponseItem } from 'models'
import { TypeOf } from 'zod'

const getCollectionProductsResponseItem = getProductsResponseItem

export type GetCollectionProductsResponseItem = TypeOf<
  typeof getCollectionProductsResponseItem
>

export default getCollectionProductsResponseItem
