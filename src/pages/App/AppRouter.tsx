import { Basket, Footer, Navigation } from 'commonComponents'
import { HamburgerMenu } from 'commonComponents/'
import { AdminRoute } from 'components'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'

const AppRouter = () => (
  <>
    <Navigation />

    <Basket />

    <HamburgerMenu />

    <Suspense fallback={<p>...</p>}>
      <Switch>
        {routes.map(({ admin, ...props }, index) => {
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
