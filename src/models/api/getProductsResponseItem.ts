import { image, mold, product } from '../db'
import { TypeOf, array } from 'zod'

const getProductsResponseItem = product
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

export type GetProductsResponseItem = TypeOf<typeof getProductsResponseItem>

export default getProductsResponseItem
