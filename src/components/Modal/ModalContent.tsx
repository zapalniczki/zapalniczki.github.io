import { Flexbox } from '@zapalniczki/shared-components'
import React, { ReactNode } from 'react'
import { FlexboxProps, SpaceProps } from 'styled-system'

type Props = {
  children: ReactNode
} & FlexboxProps &
  SpaceProps

const ModalContent = ({ children, ...props }: Props) => (
  <Flexbox {...props} flexDirection="column" minHeight="100%" width="100%">
    {children}
  </Flexbox>
)

export default ModalContent
