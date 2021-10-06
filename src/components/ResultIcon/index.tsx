import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'

type Props = {
  size?: '5x',
  variant: 'SUCCESS' | 'ERROR'
}

const ResultIcon = ({ size = '5x', variant }: Props) => {
  const { colors } = useTheme()

  return (
    <FontAwesomeIcon
      color={colors[variant === 'SUCCESS' ? 'green' : 'red']}
      icon={variant === 'SUCCESS' ? 'check-circle' : 'times-circle'}
      size={size}
    />
  )
}

export default ResultIcon
