import {
  ADMIN_CALLBACKS,
  ADMIN_DELIVERY_TYPES,
  ADMIN_MOLDS,
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
  PRODUCTS,
  VIEW_PRODUCT
} from 'constants/routes'

import React from 'react'

const routes = [
  {
    component: React.lazy(() => import('pages/Products')),
    exact: true,
    path: PRODUCTS
  },
  {
    component: React.lazy(() => import('pages/ViewProduct')),
    path: VIEW_PRODUCT
  },
  {
    component: React.lazy(() => import('pages/checkout/CheckoutProducts')),
    path: CHECKOUT_PRODUCTS
  },
  {
    component: React.lazy(() => import('pages/checkout/CheckoutDetails')),
    path: CHECKOUT_DETAILS
  },
  {
    component: React.lazy(() => import('pages/checkout/CheckoutDelivery')),
    path: CHECKOUT_DELIVERY
  },
  {
    component: React.lazy(() => import('pages/checkout/CheckoutShipping')),
    path: CHECKOUT_SHIPPING
  },
  {
    component: React.lazy(() => import('pages/checkout/CheckoutPayment')),
    path: CHECKOUT_PAYMENT
  },
  {
    component: React.lazy(() => import('pages/checkout/CheckoutResult')),
    path: CHECKOUT_RESULT
  },
  {
    component: React.lazy(() => import('pages/AdminOrders')),
    path: ADMIN_ORDERS
  },
  {
    component: React.lazy(() => import('pages/Contact')),
    path: CONTACT
  },
  {
    component: React.lazy(() => import('pages/Products')),
    path: DELIVERY_AND_PAYMENTS,
    exact: true
  },
  {
    component: React.lazy(() => import('pages/HowToCreateOrder')),
    path: HOW_TO_CREATE_ORDER
  },
  {
    component: React.lazy(() => import('pages/Documents')),
    path: DOCUMENTS
  },

  {
    component: React.lazy(() => import('pages/AdminOrders')),
    admin: true,
    path: ADMIN_ORDERS
  },
  {
    component: React.lazy(() => import('pages/AdminNewsletterUsers')),
    admin: true,
    path: ADMIN_NEWSLETTER_USERS
  },
  {
    component: React.lazy(() => import('pages/AdminCallbacks')),
    admin: true,
    path: ADMIN_CALLBACKS
  },
  {
    component: React.lazy(() => import('pages/AdminDeliveryTypes')),
    admin: true,
    path: ADMIN_DELIVERY_TYPES
  },
  {
    component: React.lazy(() => import('pages/AdminPaymentTypes')),
    admin: true,
    path: ADMIN_PAYMENT_TYPES
  },

  {
    component: React.lazy(() => import('pages/AdminMolds')),
    path: ADMIN_MOLDS
  },

  {
    component: React.lazy(() => import('pages/Home')),
    exact: true,
    path: HOME
  },

  {
    component: React.lazy(() => import('pages/PageNotFound')),
    path: '*'
  }
]

console.log(routes)

export default routes
