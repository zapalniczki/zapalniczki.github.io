import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from 'components'
import React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import getColor from 'styles/getColor'

type Props = LinkProps & {
  className?: string
  icon?: IconName,
  underline?: boolean
}

const Link = ({ children, icon, ...props }: Props) => (
  <Container {...props}>
    {icon && <FontAwesomeIcon icon={icon} />}

    <Text
      fontWeight={icon ? 'bold' : 'unset'}
      marginLeft={icon ? 's-size' : 0}
      type="subtitle-1"
    >
      {children}
    </Text>
  </Container>
)

type ContainerProps = { underline?: boolean }
const Container = styled(RouterLink)<ContainerProps>`
  display: flex;
  align-items: center;
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  color: ${getColor('black')};
`

export default Link
