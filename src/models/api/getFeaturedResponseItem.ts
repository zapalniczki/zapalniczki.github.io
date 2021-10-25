import { getProductsResponseItem, product } from 'models'
import { TypeOf } from 'zod'

const getFeaturedResponseItem = product
  .pick({ featured: true, created_at: true })
  .merge(getProductsResponseItem)

export type GetFeaturedResponseItem = TypeOf<typeof getFeaturedResponseItem>

export default getFeaturedResponseItem
