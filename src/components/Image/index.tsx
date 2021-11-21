import { Flexbox, Spinner } from 'components'
import { useDev } from 'hooks'
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
        <Flexbox alignItems="center" justifyContent="center">
          <Spinner small />
        </Flexbox>
      }
      src={imageSrc}
      {...props}
    />
  )
}

export default Image
