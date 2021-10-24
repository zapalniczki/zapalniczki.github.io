import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from 'components'
import React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import getColor from 'styles/getColor'

type Props = LinkProps & {
  className?: string
  icon?: IconName
  showUnderline?: boolean
}

const Link = ({ children, icon, showUnderline, ...props }: Props) => (
  <Container $showUnderline={showUnderline} {...props}>
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

type ContainerProps = { $showUnderline?: boolean }
const Container = styled(RouterLink)<ContainerProps>`
  display: flex;
  align-items: center;
  text-decoration: ${(props) => (props.$showUnderline ? 'underline' : 'none')};
  color: ${getColor('black')};
`

export default Link
