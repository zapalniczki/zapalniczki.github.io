import tableBase from './tableBase'
import { string, TypeOf, enum as zenum } from 'zod'

const size = zenum([
  'TILE',
  'LARGE',
  'TILE_REVERSE',
  'THUMBNAIL',
  'BASKET',
  'LONG'
])
export type Size = TypeOf<typeof size>

const image = tableBase.extend({
  src: string(),
  size: size
})

export type Image = TypeOf<typeof image>

export default image
