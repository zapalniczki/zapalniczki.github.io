import MaxWidth from '../MaxWidth'
import Flexbox from '../Flexbox'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import getSpace from 'styles/getSpace'

type Props = {
  children: ReactNode
  columns?: boolean
}

const Page = ({ children, columns }: Props) => (
  <Container as="main">
    <StyledMaxWidth columns={columns}>{children}</StyledMaxWidth>
  </Container>
)

const Container = styled(Flexbox)`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: ${(props) => `${getSpace('top')(props)} 0`};
  padding-top: calc(12rem + 2rem);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

type StyledMaxWidthProps = Pick<Props, 'columns'>
const StyledMaxWidth = styled(MaxWidth)<StyledMaxWidthProps>`
  ${(props) =>
    props.columns &&
    css`
      flex-direction: row;

      & > * {
        &:first-child {
          min-width: 70%;
          max-width: 70%;
        }

        &:last-child {
          margin-left: ${getSpace('m-size')};
          min-width: 30%;
          max-width: 30%;
        }
      }
    `}
`

export default Page
