import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@zapalniczki/shared-components'
import React from 'react'
import { SpaceProps } from 'styled-system'

type Props = SpaceProps & {
  size?: Size
}

const Spinner = ({ size = 'REGULAR', ...props }: Props) => {
  const iconSize = sizeToIconSize[size]

  return (
    <Box {...props} opacity={0.5}>
      <FontAwesomeIcon icon="circle-notch" size={iconSize} spin />
    </Box>
  )
}

type Size = 'SMALL' | 'REGULAR' | 'LARGE'
const sizeToIconSize: Record<Size, SizeProp> = {
  SMALL: '2x',
  REGULAR: '3x',
  LARGE: '5x'
}

export default Spinner
