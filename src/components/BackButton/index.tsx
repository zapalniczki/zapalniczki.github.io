import { Box } from '@zapalniczki/shared-components'

import Link from '../Link'
import React from 'react'
import { To } from 'history'
import { SpaceProps } from 'styled-system'

import {} from 'react-router-dom'

type Props = {
  label: string
  to: To
} & SpaceProps

const BackButton = ({ label, to, ...props }: Props) => (
  <Box width="max-content" {...props}>
    <Link icon="arrow-left" label={label} to={to} />
  </Box>
)

export default BackButton
