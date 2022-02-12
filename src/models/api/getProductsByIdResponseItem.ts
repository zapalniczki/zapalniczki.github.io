import { icon, image, label, mold, product } from 'braty-common'
import { array, TypeOf } from 'zod'

const getProductsByIdResponseItem = product
  .pick({
    id: true,
    price_en: true,
    price_pl: true,
    collection_id: true,
    label_id: true,
    icon_id: true,
    visible: true,
    bestseller: true,
    name_pl: true,
    name_en: true,
    updated_at: true
  })
  .extend({
    images: array(image),
    mold: mold.pick({
      status: true
    }),
    icon: icon.pick({
      label_pl: true,
      label_en: true
    }),
    label: label.pick({
      label_pl: true,
      label_en: true
    })
  })

export type GetProductsByIdResponseItem = TypeOf<
  typeof getProductsByIdResponseItem
>

export default getProductsByIdResponseItem
