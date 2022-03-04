import { Badge } from 'components'
import { useTranslation } from 'hooks'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { getColor } from 'styles'

type Props = {
  children: ReactNode
  to: string
} & SpaceProps

const ExternalLink = ({ children, to, ...props }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const isDisabled = !to.length

  const link = (
    <Container
      aria-disabled={isDisabled}
      disabled={isDisabled}
      href={isDisabled ? undefined : to}
      rel="noopener noreferrer"
      target={isDisabled ? '_self' : '_blank'}
      {...props}
    >
      {children}
    </Container>
  )

  if (isDisabled) {
    return (
      <Badge hasText text={commonT('soon')} top={-100}>
        {link}
      </Badge>
    )
  }

  return link
}

type ContainerProps = {
  disabled?: boolean
} & SpaceProps

const Container = styled.a<ContainerProps>`
  color: ${(props) =>
    props.disabled ? getColor('dark-color')(props) : getColor('black')(props)};
  text-decoration: none;
  cursor: ${(props) => props.disabled && 'not-allowed'};

  &:hover {
    text-decoration: ${(props) => !props.disabled && 'underline'};
  }

  ${space}
`

export default ExternalLink
