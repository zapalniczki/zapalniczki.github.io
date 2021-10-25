import { product } from 'models'
import { TypeOf } from 'zod'
import getProductsResponseItem from './getProductsResponseItem'

const getOtherPlacesResponseItem = product
  .pick({ label_id: true, collection_id: true })
  .merge(getProductsResponseItem)

export type GetOtherPlacesResponseItem = TypeOf<
  typeof getOtherPlacesResponseItem
>

export default getOtherPlacesResponseItem
