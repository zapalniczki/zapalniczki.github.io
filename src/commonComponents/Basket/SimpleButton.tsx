import React from 'react'
import { GridAreaProps } from 'styled-system'
import { Box, Button } from 'components'
import { IconName } from '@fortawesome/fontawesome-common-types'

type Props = {
  disabled?: boolean
  icon: IconName
  onClick: () => void
} & GridAreaProps

const SimpleButton = ({ disabled, icon, onClick, ...props }: Props) => (
  <Box {...props}>
    <Button
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      size="medium"
      type="button"
      variant="ternary"
    />
  </Box>
)

export default SimpleButton
