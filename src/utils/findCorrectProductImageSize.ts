import { Image, Size } from 'models'
import getProductImagePlaceholder from './getProductImagePlaceholder'

const findCorrectProductImageSize = (images: Image[], size: Size) => {
  const image = images.find((i) => i.size === size)

  if (image) {
    return image.src
  }

  return getProductImagePlaceholder(size)
}

export default findCorrectProductImageSize
