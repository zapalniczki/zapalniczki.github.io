import { createBrowserHistory } from 'history'
import React, { Suspense } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { Basket, Footer, Navigation } from 'commonComponents'
import { AdminRoute } from 'components'
import routes from './routes'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Navigation />

    <Basket />

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
  </Router>
)

export default AppRouter
