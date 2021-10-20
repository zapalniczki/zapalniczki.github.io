import { image, product } from 'models'
import { TypeOf, array } from 'zod'

const getProductsResponseItem = product
  .pick({
    id: true,
    price: true,
    name: true,
    collection_id: true,
    visible: true
  })
  .extend({
    images: array(image)
  })

export type GetProductsResponseItem = TypeOf<typeof getProductsResponseItem>

export default getProductsResponseItem
