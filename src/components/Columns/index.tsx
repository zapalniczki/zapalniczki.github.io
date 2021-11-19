import { Flexbox } from 'components'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import breakpoints from 'styles/breakpoints'
import getSpace from 'styles/getSpace'

type Props = {
  children: ReactNode
}

const Columns = ({ children }: Props) => <Container>{children}</Container>

const Container = styled(Flexbox)`
  flex-direction: column;
  gap: ${getSpace('m-size')};

  & > * {
    &:first-child {
      min-width: 100%;
      max-width: 100%;
    }

    &:last-child {
      min-width: 100%;
      max-width: 100%;
    }
  }

  ${(props) => breakpoints('desktop')`
    flex-direction: row;

    & > * {
      &:first-child {
        min-width: 70%;
        max-width: 70%;
      }

      &:last-child {
        min-width: ${`calc(30% - ${getSpace('m-size')(props)})`};
        max-width: ${`calc(30% - ${getSpace('m-size')(props)})`};
      }
    }
`}
`

export default Columns
