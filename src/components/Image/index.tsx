import { Spinner } from 'components'
import { useDev } from 'hooks'
import { Flexbox } from '@zapalniczki/shared-components'

import { ImageSize } from 'braty-common'
import React from 'react'
import { Img } from 'react-image'
import { getProductImagePlaceholder } from 'utils'

type Props = {
  alt?: string
  className?: string
  height?: number
  onPointerEnter?: React.PointerEventHandler<HTMLImageElement>
  onPointerLeave?: React.PointerEventHandler<HTMLImageElement>
  size?: ImageSize
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any
  width?: number
}

const Image = ({ alt = '', size, src, ...props }: Props) => {
  const isDev = useDev()
  const placeholder = getProductImagePlaceholder(size || 'TILE')

  let imageSrc = [src, placeholder]
  if (isDev && size) {
    imageSrc = [placeholder]
  }

  return (
    <Img
      alt={alt}
      loader={
        <Flexbox
          alignItems="center"
          height="100%"
          justifyContent="center"
          width="100%"
        >
          <Spinner
            size={size === 'BASKET' || size === 'THUMBNAIL' ? 'SMALL' : 'LARGE'}
          />
        </Flexbox>
      }
      src={imageSrc}
      {...props}
    />
  )
}

export default Image
