import { Button, Flexbox } from 'components'
import React from 'react'

type ButtonProps = {
  disabled?: boolean,
  label: string,
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

export default ModalFooter
