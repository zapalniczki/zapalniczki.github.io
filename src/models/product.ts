import { string, object, TypeOf, number, boolean } from 'zod'

const product = object({
  id: string(),
  created_at: string(),
  updated_at: string(),
  mold_id: string(),
  name: string(),
  price: number(),
  collection_id: string(),
  visible: boolean().nullable(),
  featured: boolean().nullable(),
  image_id: string(),
  description: string()
})

export type Product = TypeOf<typeof product>

export default product
