import { image, mold, product } from '../db'
import { array, TypeOf } from 'zod'

const getProductsByIdResponseItem = product
  .pick({
    id: true,
    price: true,
    name: true,
    collection_id: true,
    label_id: true,
    icon_id: true,
    visible: true,
    bestseller: true
  })
  .extend({
    images: array(image),
    mold: mold.pick({
      status: true
    })
  })

export type GetProductsByIdResponseItem = TypeOf<
  typeof getProductsByIdResponseItem
>

export default getProductsByIdResponseItem
