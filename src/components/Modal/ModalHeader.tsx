import { Separator, Heading, Button } from 'components'
import Flexbox from 'components/Flexbox'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick: () => void
}

// sort props keys
// sort descructurized props

const ModalHeader = ({ onClick, children }: Props) => (
  <>
    <Flexbox alignItems="center" justifyContent="space-between">
      <Heading level={6}>{children}</Heading>
      <Button icon="times" onClick={onClick} size="small" variant="ternary" />
    </Flexbox>

    <Separator />
  </>
)

export default ModalHeader
