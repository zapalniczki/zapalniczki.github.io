import { icon, image, label, mold, product } from '../db'
import { array, TypeOf } from 'zod'

const getProductsByIdResponseItem = product
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
      label_pl: true
    })
  })

export type GetProductsByIdResponseItem = TypeOf<
  typeof getProductsByIdResponseItem
>

export default getProductsByIdResponseItem
