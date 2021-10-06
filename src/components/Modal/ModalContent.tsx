import Flexbox from 'components/Flexbox'
import React, { ReactNode } from 'react'
import { FlexboxProps } from 'styled-system'

type Props = {
  children: ReactNode
} & FlexboxProps

const ModalContent = ({ children, ...props }: Props) => {
  return (
    <Flexbox {...props} flexDirection="column" height="100%" width="100%">
      {children}
    </Flexbox>
  )
}

export default ModalContent
