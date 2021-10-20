import { getProductsResponseItem, product } from 'models'
import { TypeOf } from 'zod'

const getOtherIconsResponseItem = product
  .pick({ label_id: true, icon_id: true })
  .merge(getProductsResponseItem)

export type GetOtherIconsResponseItem = TypeOf<typeof getOtherIconsResponseItem>

export default getOtherIconsResponseItem
