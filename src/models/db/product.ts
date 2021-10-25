import { string, object, TypeOf, number, boolean } from 'zod'

const product = object({
  id: string(),
  created_at: string(),
  updated_at: string(),
  mold_id: string(),
  label_id: string(),
  icon_id: string(),
  name: string(),
  description: string(),
  price: number(),
  collection_id: string(),
  bestseller: boolean(),
  visible: boolean(),
  featured: boolean()
})

export type Product = TypeOf<typeof product>

export default product
