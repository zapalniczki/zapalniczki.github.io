import { createBrowserHistory } from 'history'
import React, { Suspense } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { Basket, Footer, Navigation } from 'commonComponents'
import { AdminRoute } from 'components'
import routes from './routes'
import { PRODUCTS } from 'constants/routes'

export const history = createBrowserHistory()

const ProductsLazy = React.lazy(
  () =>
    import(
      /* webpackChunkName: "products" */
      'pages/Products'
    )
)

const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Basket />

      <Switch>
        <Suspense fallback={<p>dfff</p>}>
          <Route component={ProductsLazy} exact={true} path={PRODUCTS} />
        </Suspense>

        {routes.map(({ admin, ...props }, index) => {
          if (admin) {
            return <AdminRoute {...props} />
          }

          return (
            <Suspense fallback={<p>...</p>} key={index}>
              <Route {...props} />
            </Suspense>
          )
        })}
      </Switch>

      <Footer />
    </>
  </Router>
)

export default AppRouter
