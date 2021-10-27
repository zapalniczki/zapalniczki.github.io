import { Flexbox, Text } from 'components'
import React, { ReactNode } from 'react'
import { SpaceProps } from 'styled-system'
import { Color } from 'styles/theme'

type Props = {
  children: ReactNode
  variant?: 'POSITIVE' | 'NEGATIVE'
} & SpaceProps

const Chip = ({ children, ...props }: Props) => {
  let color: Color
  if (props.variant === 'POSITIVE') {
    color = 'green'
  } else if (props.variant === 'NEGATIVE') {
    color = 'red'
  } else {
    color = 'yellow'
  }

  return (
    <Flexbox
      {...props}
      alignItems="center"
      backgroundColor={color}
      color="white"
      justifyContent="center"
      paddingX="s-size"
      paddingY="ss-size"
      width="fit-content"
    >
      <Text type="button" white>
        {children}
      </Text>
    </Flexbox>
  )
}

export default Chip
