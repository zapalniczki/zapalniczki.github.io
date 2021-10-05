import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import {
  ADMIN_NEWSLETTER_USERS,
  ADMIN_ORDERS,
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT,
  CHECKOUT_PRODUCTS,
  CHECKOUT_RESULT,
  CHECKOUT_SHIPPING,
  CONTACT,
  DELIVERY_AND_PAYMENTS,
  DOCUMENTS,
  HOME,
  HOW_TO_CREATE_ORDER,
  PRODUCTS,
  VIEW_PRODUCT
} from 'constants/routes'
import { Basket, Footer, Navigation } from 'commonComponents'
import {
  CheckoutDetails,
  ViewProduct,
  PageNotFound,
  Products,
  CheckoutProducts,
  CheckoutDelivery,
  CheckoutPayment,
  CheckoutShipping,
  CheckoutResult,
  AdminOrders,
  Home,
  Contact,
  DeliveryAndPayments,
  HowToCreateOrder,
  AdminNewsletterUsers
} from 'pages'
import Documents from 'pages/Documents'
import { AdminRoute } from 'components'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Basket />

      <Switch>
        <Route component={Products} exact path={PRODUCTS} />

        <Route component={ViewProduct} path={VIEW_PRODUCT} />

        <Route component={CheckoutProducts} path={CHECKOUT_PRODUCTS} />

        <Route component={CheckoutDetails} path={CHECKOUT_DETAILS} />

        <Route component={CheckoutDelivery} path={CHECKOUT_DELIVERY} />

        <Route component={CheckoutShipping} path={CHECKOUT_SHIPPING} />

        <Route component={CheckoutPayment} path={CHECKOUT_PAYMENT} />

        <Route component={CheckoutResult} path={CHECKOUT_RESULT} />

        <AdminRoute component={AdminOrders} path={ADMIN_ORDERS} />

        <AdminRoute
          component={AdminNewsletterUsers}
          path={ADMIN_NEWSLETTER_USERS}
        />

        <Route component={Contact} path={CONTACT} />

        <Route component={DeliveryAndPayments} path={DELIVERY_AND_PAYMENTS} />

        <Route component={HowToCreateOrder} path={HOW_TO_CREATE_ORDER} />

        <Route component={Documents} path={DOCUMENTS} />

        <Route component={Home} exact path={HOME} />

        <Route component={PageNotFound} path="*" />
      </Switch>

      <Footer />
    </>
  </Router>
)

export default AppRouter
