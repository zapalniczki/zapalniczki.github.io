import { Basket, Footer, Header, TopBar } from 'commonComponents'
import { HamburgerMenu, CookiesConsent } from 'commonComponents/'
import { AdminAuth, Flexbox, UserAuth } from 'components'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'

const AppRouter = () => (
  <>
    <TopBar />

    <Header />

    <Basket />

    <HamburgerMenu />

    <CookiesConsent />

    <Routes>
      {routes.map(({ Component, admin, user, ...props }, index) => {
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
            key={index}
            {...props}
          />
        )
      })}
    </Routes>

    <Footer />
  </>
)

export default AppRouter
