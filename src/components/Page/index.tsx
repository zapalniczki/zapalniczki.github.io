import MaxWidth from '../MaxWidth'
import Flexbox from '../Flexbox'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import getSpace from 'styles/getSpace'
import breakpoints from 'styles/breakpoints'
import { matchPath, useLocation } from 'react-router-dom'
import Snowfall from 'react-snowfall'

type Props = {
  children: ReactNode
  columns?: boolean
}

const Page = ({ children, columns }: Props) => {
  const { pathname } = useLocation()
  const isProductsPage = matchPath(pathname, {
    path: '/products'
  })

  return (
    <Container as="main">
      <StyledMaxWidth columns={columns}>{children}</StyledMaxWidth>

      {!isProductsPage && (
        <Snowfall
          color="white"
          radius={[1, 7.5]}
          snowflakeCount={25}
          style={{
            top: '0',
            bottom: '0',
            position: 'absolute'
          }}
        />
      )}
    </Container>
  )
}

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
      flex-direction: column;

      & > * {
        &:first-child {
          min-width: 100%;
          max-width: 100%;
        }

        &:last-child {
          margin-top: ${getSpace('m-size')(props)};
          margin-left: 0;
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
            margin-top: 0;
            margin-left: ${getSpace('m-size')(props)};
            min-width: ${`calc(30% - ${getSpace('m-size')(props)})`};
            max-width: ${`calc(30% - ${getSpace('m-size')(props)})`};
          }
        }
      `}
    `}
`

export default Page
