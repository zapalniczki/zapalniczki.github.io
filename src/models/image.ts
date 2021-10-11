import { string, object, TypeOf } from 'zod'

const image = object({
  id: string(),
  created_at: string(),
  updated_at: string(),
  large: string(),
  tile: string(),
  thumbnail: string(),
  basket: string(),
  long: string()
})

export type Image = TypeOf<typeof image>

export default image
