import { Flexbox, Heading } from 'components'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import getColor from 'styles/getColor'

type Props = {
  children: ReactNode
} & SpaceProps

const ListItem = ({ children, ...props }: Props) => (
  <Flexbox alignItems="center" {...props}>
    <Triangle />

    <Heading level={6} marginLeft="m-size">
      {children}
    </Heading>
  </Flexbox>
)

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 0.5rem solid transparent;
  border-left: 1rem solid;
  border-left-color: ${getColor('braty-red')};
  border-bottom: 0.5rem solid transparent;
`

export default ListItem
