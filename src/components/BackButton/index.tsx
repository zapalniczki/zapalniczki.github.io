import { Box, Link } from 'components'
import React from 'react'
import { LocationDescriptor } from 'history'
import { SpaceProps } from 'styled-system'

type Props = {
  to: LocationDescriptor
  label: string
} & SpaceProps

const BackButton = ({ to, label, ...props }: Props) => (
  <Box paddingY="xs-size" {...props}>
    <Link icon="arrow-left" to={to}>
      {label}
    </Link>
  </Box>
)

export default BackButton
