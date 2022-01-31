import { image, mold, product, icon, label, collection } from 'braty-common'
import { array, TypeOf } from 'zod'

const getProductResponse = product
  .pick({
    description_pl: true,
    description_en: true,
    id: true,
    price: true,
    name_pl: true,
    name_en: true
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
    collection: collection.pick({
      label_en: true,
      label_pl: true,
      id: true
    }),
    mold: mold.pick({
      id: true,
      status: true
    })
  })

export type GetProductResponse = TypeOf<typeof getProductResponse>

export default getProductResponse
