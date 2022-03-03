import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Text } from 'components'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import { getColor } from 'styles'
import { Color } from 'styles'
import Loader from './index.loader'

type Props = {
  children: ReactNode
  onClick?: () => void
  rounded?: boolean
  selected?: boolean
  variant?: 'POSITIVE' | 'NEGATIVE'
} & SpaceProps

const Chip = ({ children, onClick, rounded, selected, ...props }: Props) => {
  let color: Color | null | 'transparent'

  if (selected) {
    color = 'white'
  } else if (onClick) {
    color = 'transparent'
  } else if (props.variant === 'POSITIVE') {
    color = 'green'
  } else if (props.variant === 'NEGATIVE') {
    color = 'red'
  } else {
    color = 'yellow'
  }

  return (
    <Container
      {...props}
      alignItems="center"
      as={onClick ? 'button' : 'div'}
      backgroundColor={color}
      border={onClick ? '1px solid' : 'none'}
      borderColor="gray-medium"
      borderRadius={rounded ? 'large' : 0}
      color="white"
      justifyContent="center"
      onClick={onClick}
      paddingX="m-size"
      paddingY="ss-size"
      width="max-content"
    >
      {selected && <FontAwesomeIcon color="black" icon="check" />}

      <Text
        fontWeight={selected ? 'bold' : 'unset'}
        marginLeft={selected ? 'xxs-size' : 0}
        type="body-2"
        white={onClick ? false : true}
        wrap={false}
      >
        {children}
      </Text>
    </Container>
  )
}

type ContainerProps = Pick<Props, 'onClick'>
const Container = styled(Flexbox)<ContainerProps>`
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};

  &:hover {
    border-color: ${getColor('gray-dark')};
  }
`

export { Loader as ChipLoader }
export default Chip
