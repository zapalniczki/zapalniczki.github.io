import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from 'components'
import React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import getColor from 'styles/getColor'

type Props = LinkProps & {
  active?: boolean
  className?: string
  icon?: IconName
  label?: string
  showUnderline?: boolean
}

const Link = ({
  active,
  children,
  icon,
  label,
  showUnderline,
  ...props
}: Props) => (
  <Container $showUnderline={showUnderline} {...props}>
    {icon && <FontAwesomeIcon icon={icon} />}

    {label && (
      <Text
        fontWeight={icon || active ? 'bold' : 'unset'}
        marginLeft={icon ? 's-size' : 0}
        type="subtitle-2"
      >
        {label}
      </Text>
    )}

    {children}
  </Container>
)

type ContainerProps = {
  $showUnderline?: boolean
}

const Container = styled(RouterLink)<ContainerProps>`
  display: flex;
  align-items: center;
  text-decoration: ${(props) => (props.$showUnderline ? 'underline' : 'none')};
  color: ${getColor('black')};
`

export default Link
