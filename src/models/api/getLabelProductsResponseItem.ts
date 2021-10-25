import { product } from 'models'
import { TypeOf } from 'zod'
import getProductsResponseItem from './getProductsResponseItem'

const getLabelProductsResponseItem = product
  .pick({ label_id: true })
  .merge(getProductsResponseItem)

export type GetLabelProductsResponseItem = TypeOf<
  typeof getLabelProductsResponseItem
>

export default getLabelProductsResponseItem
