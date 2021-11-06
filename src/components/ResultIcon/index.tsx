import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Color } from 'styles/theme'

type Props = {
  size?: '5x' | '2x' | '1x' | '3x'
  variant: Variant
}

const ResultIcon = ({ size = '5x', variant }: Props) => {
  const { colors } = useTheme()

  return (
    <FontAwesomeIcon
      color={colors[variantToColor[variant]]}
      icon={variantToIcon[variant]}
      size={size}
    />
  )
}

type Variant = 'SUCCESS' | 'ERROR' | 'INFO'

const variantToIcon: Record<Variant, IconName> = {
  SUCCESS: 'check-circle',
  INFO: 'info-circle',
  ERROR: 'times-circle'
}

const variantToColor: Record<Variant, Color> = {
  SUCCESS: 'green',
  INFO: 'black',
  ERROR: 'red'
}

export default ResultIcon
