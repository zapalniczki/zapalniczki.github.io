import { Box } from 'components'
import React from 'react'
import { ReactComponent as Svg } from 'assets/logo.svg'

type Props = {
  expanded?: boolean
}

const Logo = ({ expanded }: Props) => (
  <Box height={!expanded ? '6rem' : '4.5rem'} marginLeft="-1rem">
    <Svg />
  </Box>
)

export default Logo
