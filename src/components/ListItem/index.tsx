import { Flexbox } from 'components'
import { Heading } from 'components'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import getColor from 'styles/getColor'

type Props = {
  children: ReactNode
} & SpaceProps

const ListItem = ({ children, ...props }: Props) => {
  return (
    <Container {...props}>
      <Triangle />
      <Heading level={6} marginLeft="m-size">
        {children}
      </Heading>
    </Container>
  )
}

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 0.5rem solid transparent;
  border-left: 1rem solid;
  border-left-color: ${getColor('braty-red')};
  border-bottom: 0.5rem solid transparent;
`

const Container = styled(Flexbox)`
  list-style-type: none;
  align-items: center;
`

export default ListItem
