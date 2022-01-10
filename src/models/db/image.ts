import tableBase from './tableBase'
import { string, TypeOf, enum as zenum } from 'zod'

const imageSize = zenum([
  'TILE',
  'LARGE',
  'TILE_REVERSE',
  'THUMBNAIL',
  'BASKET',
  'LONG'
])
export type ImageSize = TypeOf<typeof imageSize>

const image = tableBase.extend({
  src: string(),
  size: imageSize
})

export type Image = TypeOf<typeof image>

export default image
