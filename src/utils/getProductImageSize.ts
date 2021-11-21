import { Size } from 'models'

const getProductImageSize = (size: Size): [string, string] => {
  switch (size) {
    default:
    case 'TILE':
    case 'TILE_REVERSE':
      return ['20rem', '37,8rem']

    case 'LARGE':
      return ['42.5rem', '42.5rem']

    case 'THUMBNAIL':
      return ['6rem', '6rem']

    case 'BASKET':
      return ['9rem', '9rem']

    case 'LONG':
      return ['20rem', '60rem']
  }
}

export default getProductImageSize
