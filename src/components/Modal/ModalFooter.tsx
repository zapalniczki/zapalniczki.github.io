import { Button, Flexbox } from 'components'
import React from 'react'

type ButtonProps = {
  disabled?: boolean
  label: string
  onClick: () => void
}

type Props = {
  primaryButton: ButtonProps
  secondaryButton?: ButtonProps
}

const ModalFooter = ({ primaryButton, secondaryButton }: Props) => (
  <Flexbox justifyContent="flex-end" marginTop="m-size" width="100%">
    {secondaryButton && (
      <Button
        label={secondaryButton.label}
        onClick={secondaryButton.onClick}
        size="small"
        variant="secondary"
      />
    )}

    <Button
      disabled={primaryButton.disabled}
      label={primaryButton.label}
      marginLeft="s-size"
      onClick={primaryButton.onClick}
      size="small"
      variant="primary"
    />
  </Flexbox>
)

export default ModalFooter
