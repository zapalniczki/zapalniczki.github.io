import { image, mold, product, icon, label } from 'braty-common'
import { array, TypeOf } from 'zod'

const getProductResponse = product
  .pick({
    description_pl: true,
    description_en: true,
    id: true,
    price: true,
    collection_id: true,
    name: true
  })
  .extend({
    images: array(image),
    icon: icon.pick({
      id: true,
      label_pl: true,
      label_en: true
    }),
    label: label.pick({
      id: true,
      label_pl: true,
      label_en: true
    }),
    mold: mold.pick({
      id: true,
      status: true
    })
  })

export type GetProductResponse = TypeOf<typeof getProductResponse>

export default getProductResponse
