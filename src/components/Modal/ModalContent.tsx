import { Flexbox } from 'components'
import React, { ReactNode } from 'react'
import { FlexboxProps } from 'styled-system'

type Props = {
  children: ReactNode
} & FlexboxProps

const ModalContent = ({ children, ...props }: Props) => (
  <Flexbox {...props} flexDirection="column" minHeight="100%" width="100%">
    {children}
  </Flexbox>
)

export default ModalContent
