import { Button, Flexbox } from 'components'
import React from 'react'

type ButtonProps = {
  label: string
  onClick: () => void
  disabled?: boolean
}

type Props = {
  primaryButton: ButtonProps
  secondaryButton?: ButtonProps
}

const ModalFooter = ({ primaryButton, secondaryButton }: Props) => {
  return (
    <Flexbox justifyContent="flex-end" marginTop="m-size" width="100%">
      {secondaryButton && (
        <Button
          onClick={secondaryButton.onClick}
          size="small"
          variant="secondary"
        >
          {secondaryButton.label}
        </Button>
      )}

      <Button
        disabled={primaryButton.disabled}
        marginLeft="s-size"
        onClick={primaryButton.onClick}
        size="small"
        variant="primary"
      >
        {primaryButton.label}
      </Button>
    </Flexbox>
  )
}

export default ModalFooter
