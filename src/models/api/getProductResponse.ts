import { image, mold, product, icon, label, collection } from 'braty-common'
import { array, TypeOf } from 'zod'

const getProductResponse = product
  .pick({
    description_pl: true,
    description_en: true,
    id: true,
    price_pl: true,
    price_en: true,
    name_pl: true,
    name_en: true
  })
  .extend({
    images: array(image),
    icon: icon.pick({
      key: true,
      label_pl: true,
      label_en: true
    }),
    label: label.pick({
      key: true
    }),
    collection: collection.pick({
      key: true,
      label_en: true,
      label_pl: true
    }),
    mold: mold.pick({
      id: true,
      status: true
    })
  })

export type GetProductResponse = TypeOf<typeof getProductResponse>

export default getProductResponse
