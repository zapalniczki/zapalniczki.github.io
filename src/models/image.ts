import { string, object, TypeOf, enum as zenum } from 'zod'

const size = zenum([
  'TILE',
  'LARGE',
  'TILE_REVERSE',
  'THUMBNAIL',
  'BASKET',
  'LONG'
])
export type Size = TypeOf<typeof size>

const image = object({
  id: string(),
  created_at: string(),
  updated_at: string(),
  src: string(),
  size: size
})

export type Image = TypeOf<typeof image>

export default image
