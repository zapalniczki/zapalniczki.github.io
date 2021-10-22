import { product } from 'models'
import { TypeOf } from 'zod'

const getProductsByIdResponseItem = product.pick({
  price: true
})

export type GetProductsByIdResponseItem = TypeOf<
  typeof getProductsByIdResponseItem
>

export default getProductsByIdResponseItem
