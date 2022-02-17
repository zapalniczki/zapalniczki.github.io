import Flexbox from '../Flexbox'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'

type BaseProps = {
  children?: ReactNode
  right?: number
  top?: number
}

type Props = BaseProps &
  (
    | {
        count: number
        hasText?: false
      }
    | {
        hasText: true
        text: string
      }
  )

const Badge = ({ children, ...props }: Props) => {
  let content: JSX.Element | null = null
  if (props.hasText) {
    content = (
      <Count hasText={props.hasText} right={props.right} top={props.top}>
        {props.text}
      </Count>
    )
  } else {
    if (props.count >= 1) {
      content = (
        <Count count={props.count} right={props.right} top={props.top}>
          {props.count}
        </Count>
      )
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
  count?: number
  hasText?: boolean
  right?: number
  top?: number
}

const Count = styled.span<CountProps>`
  height: 2rem;
  min-width: 2rem;
  padding: ${(props) => `0 ${getSpace('xxs-size')(props)}`};
  border-radius: 0.3rem;
  background: ${getColor('braty-red')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${getColor('white')};
  font-size: 1.1rem;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${(props) =>
    `translate(${props.right || 50}%, ${props.top || -85}%)`};
`

export default Badge
