import { product } from 'models'
import { TypeOf } from 'zod'
import getProductsResponseItem from './getProductsResponseItem'

const getOtherIconsResponseItem = product
  .pick({ label_id: true, icon_id: true })
  .merge(getProductsResponseItem)

export type GetOtherIconsResponseItem = TypeOf<typeof getOtherIconsResponseItem>

export default getOtherIconsResponseItem
