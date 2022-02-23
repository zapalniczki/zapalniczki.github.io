import { Flexbox } from 'components'
import React, { ReactNode } from 'react'
import { SpaceProps } from 'styled-system'

type Props = {
  children?: ReactNode
} & SpaceProps

const Navigation = ({ children, ...props }: Props) => (
  <Flexbox
    alignItems="center"
    as="ul"
    justifyContent="flex-end"
    margin={0}
    padding={0}
    {...props}
  >
    {children}
  </Flexbox>
)

export default Navigation
