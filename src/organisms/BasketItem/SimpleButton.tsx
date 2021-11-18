import React from 'react'
import { SpaceProps } from 'styled-system'
import { Button } from 'components'
import { IconName } from '@fortawesome/fontawesome-common-types'

type Props = {
  disabled?: boolean
  icon: IconName
  onClick: () => void
} & SpaceProps

const SimpleButton = ({ disabled, icon, onClick, ...props }: Props) => (
  <Button
    disabled={disabled}
    icon={icon}
    onClick={onClick}
    size="medium"
    type="button"
    variant="quaternary"
    {...props}
  />
)

export default SimpleButton
