import { Basket, Footer, Header, TopBar } from 'commonComponents'
import { HamburgerMenu } from 'commonComponents/'
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
      <Routes>
        {routes.map(({ Component, admin, user, ...props }, index) => {
          let Alfa = (
            <Suspense fallback={<>fdfdf</>}>
              <Component />
            </Suspense>
          )

          if (admin) {
            Alfa = (
              <AdminAuth>
                <Suspense fallback={<>fdfdf</>}>
                  <Component />
                </Suspense>
              </AdminAuth>
            )
          }

          if (user) {
            Alfa = (
              <UserAuth>
                <Suspense fallback={<>fdfdf</>}>
                  <Component />
                </Suspense>
              </UserAuth>
            )
          }

          return <Route element={Alfa} key={index} {...props} />
        })}
      </Routes>
    </Suspense>

    <Footer />
  </>
)

export default AppRouter
