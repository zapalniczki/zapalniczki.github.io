import { Badge } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'
import getColor from 'styles/getColor'

type Props = {
  children: ReactNode
  to: string
}

const ExternalLink = ({ children, to }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const isDisabled = to.length === 0

  const link = (
    <Container
      aria-disabled={isDisabled}
      disabled={isDisabled}
      href={isDisabled ? undefined : to}
      rel="noopener noreferrer"
      target={isDisabled ? '_self' : '_blank'}
    >
      {children}
    </Container>
  )

  if (isDisabled) {
    return (
      <Badge hasText text={commonT('soon')}>
        {link}
      </Badge>
    )
  }

  return link
}

type ContainerProps = { disabled?: boolean }
const Container = styled.a<ContainerProps>`
  color: ${(props) =>
    props.disabled ? getColor('gray-01')(props) : getColor('black')(props)};
  text-decoration: none;
  cursor: ${(props) => props.disabled && 'not-allowed'};

  &:hover {
    text-decoration: ${(props) => !props.disabled && 'underline'};
  }
`

export default ExternalLink
