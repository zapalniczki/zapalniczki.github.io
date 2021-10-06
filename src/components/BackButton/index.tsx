import { Box, Link } from 'components'
import React from 'react'
import { LocationDescriptor } from 'history'
import { SpaceProps } from 'styled-system'

type Props = {
  label: string,
  to: LocationDescriptor
} & SpaceProps

const BackButton = ({ label, to, ...props }: Props) => (
  <Box paddingY="xs-size" {...props}>
    <Link icon="arrow-left" to={to}>
      {label}
    </Link>
  </Box>
)

export default BackButton
