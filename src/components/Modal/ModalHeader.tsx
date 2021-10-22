import { Flexbox, Separator, Heading, Button } from 'components'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick: () => void
}

const ModalHeader = ({ children, onClick }: Props) => (
  <>
    <Flexbox alignItems="center" justifyContent="space-between">
      <Heading level={6}>{children}</Heading>

      <Button icon="times" onClick={onClick} size="small" variant="ternary" />
    </Flexbox>

    <Separator />
  </>
)

export default ModalHeader
