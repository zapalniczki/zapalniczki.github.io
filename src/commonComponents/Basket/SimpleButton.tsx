import React, { ReactNode } from 'react'
import { GridAreaProps } from 'styled-system'
import { Box, Button } from 'components'

type Props = {
  disabled?: boolean
  onClick: () => void
  children: ReactNode
} & GridAreaProps

const SimpleButton = ({ children, disabled, onClick, ...props }: Props) => (
  <Box {...props}>
    <Button
      disabled={disabled}
      onClick={onClick}
      size="medium"
      type="button"
      variant="ternary"
    >
      {children}
    </Button>
  </Box>
)

export default SimpleButton
