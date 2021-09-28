import { Flexbox, MaxWidth } from 'components'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Page = ({ children }: Props) => (
  <Container as="main">
    <MaxWidth>{children}</MaxWidth>
  </Container>
)

const Container = styled(Flexbox)`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: ${(props) =>
    `${props.theme.space.top} ${props.theme.space['pad-desktop']}`};
  padding-top: calc(12rem + 2rem);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export default Page
