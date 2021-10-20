import { getProductsResponseItem, product } from 'models'
import { TypeOf } from 'zod'

const getLabelProductsResponseItem = product
  .pick({ label_id: true })
  .merge(getProductsResponseItem)

export type GetLabelProductsResponseItem = TypeOf<
  typeof getLabelProductsResponseItem
>

export default getLabelProductsResponseItem
