import { image, mold, product, icon } from 'models'
import { array, TypeOf } from 'zod'

const getProductResponse = product
  .pick({
    description: true,
    id: true,
    name: true,
    price: true,
    collection_id: true
  })
  .extend({
    images: array(image),
    icon: icon.pick({ id: true, label: true }),
    label: icon.pick({ id: true, label: true }),
    mold: mold.pick({
      id: true,
      status: true
    })
  })

export type GetProductResponse = TypeOf<typeof getProductResponse>

export default getProductResponse
