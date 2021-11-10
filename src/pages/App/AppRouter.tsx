import { Basket, Footer, Header } from 'commonComponents'
import { HamburgerMenu } from 'commonComponents/'
import { AdminRoute, Flexbox, UserRoute } from 'components'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'

const AppRouter = () => (
  <>
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
      <Switch>
        {routes.map(({ admin, user, ...props }, index) => {
          if (user) {
            return <UserRoute key={index} {...props} />
          }

          if (admin) {
            return <AdminRoute key={index} {...props} />
          }

          return <Route {...props} key={index} />
        })}
      </Switch>
    </Suspense>

    <Footer />
  </>
)

export default AppRouter
