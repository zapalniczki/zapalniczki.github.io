import { Flexbox } from '@zapalniczki/shared-components'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'

type Props = {
  company?: boolean
}

const CustomerAvatar = ({ company }: Props) => {
  const { colors } = useTheme()

  return (
    <Flexbox
      alignItems="center"
      backgroundColor="gray-light"
      borderRadius="50%"
      justifyContent="center"
      maxHeight={SIZE}
      maxWidth={SIZE}
      minHeight={SIZE}
      minWidth={SIZE}
    >
      <FontAwesomeIcon
        color={colors['gray-medium']}
        icon={company ? 'building' : 'user-alt'}
        size="3x"
      />
    </Flexbox>
  )
}

const SIZE = '13rem'

export default CustomerAvatar
