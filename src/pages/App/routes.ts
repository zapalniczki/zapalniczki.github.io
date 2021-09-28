import * as Routes from 'constants/routes'
import { Home } from 'pages'
import { lazy } from 'react'

const AdminOrders = lazy(() => import('pages/AdminOrders'))
const CheckoutDelivery = lazy(() => import('pages/checkout/CheckoutDelivery'))
const CheckoutDetails = lazy(() => import('pages/checkout/CheckoutDetails'))
const CheckoutPayment = lazy(() => import('pages/checkout/CheckoutPayment'))
const CheckoutProducts = lazy(() => import('pages/checkout/CheckoutProducts'))
const CheckoutResult = lazy(() => import('pages/checkout/CheckoutResult'))
const CheckoutShipping = lazy(() => import('pages/checkout/CheckoutShipping'))
const Contact = lazy(() => import('pages/Contact'))
const DeliveryAndPayments = lazy(() => import('pages/DeliveryAndPayments'))
const Documents = lazy(() => import('pages/Documents'))
const HowToCreateOrder = lazy(() => import('pages/HowToCreateOrder'))
const PageNotFound = lazy(() => import('pages/PageNotFound'))
const Products = lazy(() => import('pages/Products'))
const ViewProduct = lazy(() => import('pages/ViewProduct'))

const routes = [
  {
    component: Products,
    exact: true,
    path: Routes.PRODUCTS
  },
  {
    component: ViewProduct,
    path: Routes.VIEW_PRODUCT
  },
  {
    component: CheckoutProducts,
    path: Routes.CHECKOUT_PRODUCTS
  },
  {
    component: CheckoutDetails,
    path: Routes.CHECKOUT_DETAILS
  },
  {
    component: CheckoutDelivery,
    path: Routes.CHECKOUT_DELIVERY
  },
  {
    component: CheckoutShipping,
    path: Routes.CHECKOUT_SHIPPING
  },
  {
    component: CheckoutPayment,
    path: Routes.CHECKOUT_PAYMENT
  },
  {
    component: CheckoutResult,
    path: Routes.CHECKOUT_RESULT
  },
  {
    component: AdminOrders,
    path: Routes.ADMIN_ORDERS
  },
  {
    component: Contact,
    path: Routes.CONTACT
  },
  {
    component: DeliveryAndPayments,
    path: Routes.DELIVERY_AND_PAYMENTS
  },
  {
    component: HowToCreateOrder,
    path: Routes.HOW_TO_CREATE_ORDER
  },
  {
    component: Documents,
    path: Routes.DOCUMENTS
  },
  {
    component: Home,
    exact: true,
    path: Routes.HOME
  },
  {
    component: PageNotFound,
    path: '*'
  }
]

export default routes
