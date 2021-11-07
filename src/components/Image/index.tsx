import { Flexbox, Spinner } from 'components'
import { useIsDev } from 'hooks'
import { Size } from 'models'
import React from 'react'
import { Img } from 'react-image'
import { getProductImagePlaceholder } from 'utils'

type Props = {
  alt?: string
  className?: string
  height?: number
  onPointerEnter?: React.PointerEventHandler<HTMLImageElement>
  onPointerLeave?: React.PointerEventHandler<HTMLImageElement>
  size?: Size
  src: any
  width?: number
}

const Image = ({ alt = '', size, src, ...props }: Props) => {
  const isDev = useIsDev()

  let imageSrc = [src, getProductImagePlaceholder(size || 'TILE')]
  if (isDev && size) {
    imageSrc = [getProductImagePlaceholder(size || 'TILE')]
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
          <Spinner small />
        </Flexbox>
      }
      src={imageSrc}
      {...props}
    />
  )
}

export default Image
