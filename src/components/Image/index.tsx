import { Flexbox, Spinner } from 'components'
import { Size } from 'models'
import React from 'react'
import { Img } from 'react-image'
import { getProductImagePlaceholder } from 'utils'

type Props = {
  alt?: string
  className?: string
  onPointerEnter?: React.PointerEventHandler<HTMLImageElement>
  onPointerLeave?: React.PointerEventHandler<HTMLImageElement>
  size?: Size
  src: any
}

const Image = ({ alt = '', size, src, ...props }: Props) => (
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
    src={[src, getProductImagePlaceholder(size || 'TILE')]}
    {...props}
  />
)

export default Image
