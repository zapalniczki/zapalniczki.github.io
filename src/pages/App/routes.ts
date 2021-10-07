import {
  ADMIN_CALLBACKS,
  ADMIN_DELIVERY_TYPES,
  ADMIN_NEWSLETTER_USERS,
  ADMIN_ORDERS,
  ADMIN_PAYMENT_TYPES,
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
  VIEW_PRODUCT
} from 'constants/routes'

import { lazy } from 'react'

const AdminCallbacks = lazy(() => import('pages/AdminCallbacks'))
const AdminDeliveryTypes = lazy(() => import('pages/AdminDeliveryTypes'))
const AdminNewsletterUsers = lazy(() => import('pages/AdminNewsletterUsers'))
const AdminOrders = lazy(() => import('pages/AdminOrders'))
const AdminPaymentTypes = lazy(() => import('pages/AdminPaymentTypes'))
const CheckoutDelivery = lazy(() => import('pages/checkout/CheckoutDelivery'))
const CheckoutDetails = lazy(() => import('pages/checkout/CheckoutDetails'))
const CheckoutPayment = lazy(() => import('pages/checkout/CheckoutPayment'))
const CheckoutProducts = lazy(() => import('pages/checkout/CheckoutProducts'))
const CheckoutResult = lazy(() => import('pages/checkout/CheckoutResult'))
const CheckoutShipping = lazy(() => import('pages/checkout/CheckoutShipping'))
const Contact = lazy(() => import('pages/Contact'))
const DeliveryAndPayments = lazy(() => import('pages/DeliveryAndPayments'))
const Documents = lazy(() => import('pages/Documents'))
const Home = lazy(() => import('pages/Home'))
const HowToCreateOrder = lazy(() => import('pages/HowToCreateOrder'))
const PageNotFound = lazy(() => import('pages/PageNotFound'))
const ViewProduct = lazy(() => import('pages/ViewProduct'))

const routes = [
  // {
  //   component: lazy(
  //     () =>
  //       import(
  //         /* webpackChunkName: "products" */
  //         'pages/Products'
  //       )
  //   ),
  //   exact: true,
  //   path: PRODUCTS
  // },
  {
    component: ViewProduct,
    path: VIEW_PRODUCT
  },
  {
    component: CheckoutProducts,
    path: CHECKOUT_PRODUCTS
  },
  {
    component: CheckoutDetails,
    path: CHECKOUT_DETAILS
  },
  {
    component: CheckoutDelivery,
    path: CHECKOUT_DELIVERY
  },
  {
    component: CheckoutShipping,
    path: CHECKOUT_SHIPPING
  },
  {
    component: CheckoutPayment,
    path: CHECKOUT_PAYMENT
  },
  {
    component: CheckoutResult,
    path: CHECKOUT_RESULT
  },
  {
    component: AdminOrders,
    path: ADMIN_ORDERS
  },
  {
    component: Contact,
    path: CONTACT
  },
  {
    component: DeliveryAndPayments,
    path: DELIVERY_AND_PAYMENTS
  },
  {
    component: HowToCreateOrder,
    path: HOW_TO_CREATE_ORDER
  },
  {
    component: Documents,
    path: DOCUMENTS
  },

  {
    component: AdminOrders,
    admin: true,
    path: ADMIN_ORDERS
  },
  {
    component: AdminNewsletterUsers,
    admin: true,
    path: ADMIN_NEWSLETTER_USERS
  },
  {
    component: AdminCallbacks,
    admin: true,
    path: ADMIN_CALLBACKS
  },
  {
    component: AdminDeliveryTypes,
    admin: true,
    path: ADMIN_DELIVERY_TYPES
  },
  {
    component: AdminPaymentTypes,
    admin: true,
    path: ADMIN_PAYMENT_TYPES
  },

  {
    component: Home,
    exact: true,
    path: HOME
  },

  {
    component: PageNotFound,
    path: '*'
  }
]

export default routes
