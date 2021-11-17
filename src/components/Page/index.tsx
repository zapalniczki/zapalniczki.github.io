import { usePageView } from 'hooks'
import React, { ReactNode, useEffect } from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import Snowfall from 'react-snowfall'
import styled from 'styled-components'
import { FlexboxProps } from 'styled-system'
import getSpace from 'styles/getSpace'
import Flexbox from '../Flexbox'
import MaxWidth from '../MaxWidth'

type Props = {
  children: ReactNode
} & FlexboxProps

const Page = ({ children, ...props }: Props) => {
  const { pathname } = useLocation()
  const isProductsPage = matchPath(pathname, {
    path: '/products'
  })

  const triggerPageView = usePageView()

  useEffect(() => {
    triggerPageView()
  }, [])

  return (
    <Container as="main">
      <MaxWidth {...props}>{children}</MaxWidth>

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

export default Page
