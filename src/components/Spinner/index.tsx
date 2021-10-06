import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from 'components'
import React from 'react'
import { SpaceProps } from 'styled-system'

type Props = SpaceProps & {
  small?: boolean
}

const Spinner = ({ small, ...props }: Props) => (
  <Box {...props} opacity={0.5}>
    <FontAwesomeIcon icon="spinner" size={small ? '2x' : '3x'} spin />
  </Box>
)

export default Spinner
