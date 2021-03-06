import { Image, ImageSize } from 'braty-common'
import getProductImagePlaceholder from './getProductImagePlaceholder'

const findCorrectProductImageSize = (images: Image[], size: ImageSize) => {
  const image = images.find((i) => i.size === size)

  if (image) {
    return image.src
  }

  return getProductImagePlaceholder(size)
}

export default findCorrectProductImageSize
