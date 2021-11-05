import tile from 'assets/productImagePlaceholders/tile.png'
import tileReverse from 'assets/productImagePlaceholders/tileReverse.png'
import basket from 'assets/productImagePlaceholders/basket.png'
import thumbnail from 'assets/productImagePlaceholders/thumbnail.png'
import large from 'assets/productImagePlaceholders/large.png'
import long from 'assets/productImagePlaceholders/long.png'
import { Size } from 'models'

const getProductImagePlaceholder = (size: Size) => {
  switch (size) {
    default:
    case 'TILE':
      return tile

    case 'TILE_REVERSE':
      return tileReverse

    case 'LARGE':
      return large

    case 'THUMBNAIL':
      return thumbnail

    case 'BASKET':
      return basket

    case 'LONG':
      return long
  }
}

export default getProductImagePlaceholder
