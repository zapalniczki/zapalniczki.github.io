import {
  HamburgerMenu,
  CookiesConsent,
  Footer,
  Header,
  TopBar
} from 'commonComponents'
import { AdminAuth, Flexbox, UserAuth } from 'components'
import { remoteConfigContext } from 'providers'
import React, { Suspense, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { handleRoutes } from 'utils'
import routes from './routes'
import Basket from './Basket'

const AppRouter = () => {
  const remoteConfig = useContext(remoteConfigContext)

  return (
    <>
      <TopBar />

      <Header />

      <Basket />

      <HamburgerMenu />

      <CookiesConsent />

      <Routes>
        {handleRoutes(routes, remoteConfig, 'ROUTER').map(
          ({ Component, admin, key, user, ...props }) => {
            let ComponentToRender = <Component />
            if (admin) {
              ComponentToRender = (
                <AdminAuth>
                  <Component />
                </AdminAuth>
              )
            }

            if (user) {
              ComponentToRender = (
                <UserAuth>
                  <Component />
                </UserAuth>
              )
            }

            return (
              <Route
                element={
                  <Suspense
                    fallback={
                      <Flexbox
                        alignItems="center"
                        height="100vh"
                        justifyContent="center"
                        width="100vw"
                      />
                    }
                  >
                    {ComponentToRender}
                  </Suspense>
                }
                key={key}
                {...props}
              />
            )
          }
        )}
      </Routes>

      <Footer />
    </>
  )
}

export default AppRouter
