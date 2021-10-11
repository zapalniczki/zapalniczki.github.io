import { Flexbox } from 'components'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'

type BaseProps = {
  children?: ReactNode
  stanalone?: boolean
}

type Props = BaseProps &
  ({ count: number; hasText?: false } | { hasText: true; text: string })

const Badge = ({ children, stanalone = false, ...props }: Props) => {
  let content: JSX.Element | null = null
  if (props.hasText) {
    content = (
      <Count hasText={props.hasText} stanalone={stanalone}>
        {props.text}
      </Count>
    )
  } else {
    if (props.count >= 1) {
      content = <Count stanalone={stanalone}>{props.count}</Count>
    }
  }

  return (
    <Flexbox alignItems="center" justifyContent="center" position="relative">
      {children}

      {content && content}
    </Flexbox>
  )
}

type CountProps = {
  hasText?: boolean
  stanalone: boolean
}

const Count = styled.span<CountProps>`
  height: 2rem;
  width: ${(props) => (props.hasText ? 'unset' : '2rem')};
  padding: ${(props) => props.hasText && `0 ${getSpace('xxs-size')(props)}`};
  border-radius: ${(props) => (props.hasText ? '0.3rem' : '55%')};
  background: ${getColor('red')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${getColor('white')};
  font-size: 1.1rem;
  font-weight: bold;
  position: ${(props) => !props.stanalone && 'absolute'};
  top: ${(props) => !props.stanalone && '0'};
  right: ${(props) => !props.stanalone && '0'};
  transform: ${(props) => !props.stanalone && 'translate(75%, -75%)'};
`

export default Badge
