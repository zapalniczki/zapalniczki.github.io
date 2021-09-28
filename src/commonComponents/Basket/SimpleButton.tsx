import React, { ReactNode } from 'react'
import { GridAreaProps } from 'styled-system'
import { Box, Button } from 'components'

type Props = {
  disabled?: boolean
  onClick: () => void
  children: ReactNode
} & GridAreaProps

const SimpleButton = ({ disabled, onClick, children, ...props }: Props) => (
  <Box {...props}>
    <Button
      size="medium"
      variant="ternary"
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </Button>
  </Box>
)

export default SimpleButton
