import { icon, image, label, mold, product } from '../db'
import { TypeOf, array } from 'zod'

const getProductsResponseItem = product
  .pick({
    id: true,
    price: true,
    collection_id: true,
    label_id: true,
    icon_id: true,
    visible: true,
    bestseller: true,
    name: true,
    updated_at: true
  })
  .extend({
    images: array(image),
    mold: mold.pick({
      status: true
    }),
    icon: icon.pick({
      label_pl: true
    }),
    label: label.pick({
      label: true
    })
  })

export type GetProductsResponseItem = TypeOf<typeof getProductsResponseItem>

export default getProductsResponseItem
