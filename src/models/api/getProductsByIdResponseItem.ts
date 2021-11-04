import { mold, product } from '../db'
import { TypeOf } from 'zod'

const getProductsByIdResponseItem = product
  .pick({
    price: true,
    id: true
  })
  .extend({
    mold: mold.pick({
      status: true
    })
  })

export type GetProductsByIdResponseItem = TypeOf<
  typeof getProductsByIdResponseItem
>

export default getProductsByIdResponseItem
