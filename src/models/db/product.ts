import tableBase from './tableBase'
import { string, TypeOf, number, boolean } from 'zod'

const product = tableBase.extend({
  mold_id: string(),
  label_id: string(),
  icon_id: string(),
  description_pl: string(),
  description_en: string(),
  price: number(),
  collection_id: string(),
  bestseller: boolean(),
  visible: boolean(),
  featured: boolean(),
  name: string()
})

export type Product = TypeOf<typeof product>

export default product
