import { Flexbox } from 'components'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { breakpoints } from 'styles'
import { getSpace } from 'styles'

type Props = {
  children: ReactNode
}

const Columns = ({ children }: Props) => <Container>{children}</Container>

const Container = styled(Flexbox)`
  flex-direction: column;
  gap: ${getSpace('l-size')};

  & > * {
    display: flex;
    flex-direction: column;
    gap: ${getSpace('l-size')};

    &:first-child {
      min-width: 100%;
      max-width: 100%;
    }

    &:last-child {
      min-width: 100%;
      max-width: 100%;
    }
  }

  ${(props) => breakpoints('desktop max')`
    flex-direction: row;

    & > * {
      &:first-child {
        min-width: 70%;
        max-width: 70%;
      }

      &:last-child:not(:first-child) {
        min-width: ${`calc(30% - ${getSpace('l-size')(props)})`};
        max-width: ${`calc(30% - ${getSpace('l-size')(props)})`};
      }
    }
`}
`

export default Columns
