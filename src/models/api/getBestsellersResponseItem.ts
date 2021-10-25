import { product } from 'models'
import { TypeOf } from 'zod'
import getProductsResponseItem from './getProductsResponseItem'

const getBestsellersResponseItem = product
  .pick({ bestseller: true })
  .merge(getProductsResponseItem)

export type GetBestsellersResponseItem = TypeOf<
  typeof getBestsellersResponseItem
>

export default getBestsellersResponseItem
