import { Box, Link } from 'components'
import React from 'react'
import { To } from 'history'
import { SpaceProps } from 'styled-system'

import {} from 'react-router-dom'

type Props = {
  label: string
  to: To
} & SpaceProps

const BackButton = ({ label, to, ...props }: Props) => (
  <Box {...props}>
    <Link icon="arrow-left" label={label} to={to} />
  </Box>
)

export default BackButton
