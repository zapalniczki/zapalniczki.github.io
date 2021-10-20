import { getProductsResponseItem, product } from 'models'
import { TypeOf } from 'zod'

const getBestsellersResponseItem = product
  .pick({ bestseller: true })
  .merge(getProductsResponseItem)

export type GetBestsellersResponseItem = TypeOf<
  typeof getBestsellersResponseItem
>

export default getBestsellersResponseItem
