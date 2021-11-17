import {
  ADMIN_CALLBACKS,
  ADMIN_DELIVERY_TYPES,
  ADMIN_ICONS,
  ADMIN_LABELS,
  ADMIN_MOLDS,
  ADMIN_NEWSLETTER_USERS,
  ADMIN_ORDERS,
  ADMIN_PAYMENT_TYPES,
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT,
  CART,
  CHECKOUT_RESULT,
  CONTACT,
  DELIVERY_AND_PAYMENTS,
  DOCUMENTS,
  HOME,
  HOW_TO_CREATE_ORDER,
  PRODUCTS,
  PRODUCTS_ID,
  ORDERS_ID,
  CHRISTMAS_2021,
  USER,
  SIGN_IN,
  SIGNED_OUT,
  SIGN_UP
} from 'constants/routes'

import React from 'react'

const routes = [
  {
    component: React.lazy(() => import('pages/Products')),
    exact: true,
    translationKey: 'products',
    path: PRODUCTS,
    order: 2
  },
  {
    component: React.lazy(() => import('pages/ViewProduct')),
    path: PRODUCTS_ID
  },
  {
    component: React.lazy(() => import('pages/checkout/Cart')),
    path: CART
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
    component: React.lazy(() => import('pages/checkout/CheckoutPayment')),
    path: CHECKOUT_PAYMENT
  },
  {
    component: React.lazy(() => import('pages/checkout/CheckoutResult')),
    path: CHECKOUT_RESULT
  },

  {
    component: React.lazy(() => import('pages/Order')),
    path: ORDERS_ID
  },

  {
    component: React.lazy(() => import('pages/SignIn')),
    path: SIGN_IN
  },

  {
    component: React.lazy(() => import('pages/SignUp')),
    path: SIGN_UP
  },

  {
    component: React.lazy(() => import('pages/Contact')),
    translationKey: 'contact',
    path: CONTACT,
    order: 6
  },

  {
    component: React.lazy(() => import('pages/SignedOut')),
    translationKey: 'signedOut',
    path: SIGNED_OUT
  },

  {
    component: React.lazy(() => import('pages/DeliveryAndPayments')),
    translationKey: 'deliveryAndPayments',
    path: DELIVERY_AND_PAYMENTS,
    exact: true,
    order: 5
  },
  {
    component: React.lazy(() => import('pages/HowToCreateOrder')),
    translationKey: 'howToCreateOrder',
    path: HOW_TO_CREATE_ORDER,
    order: 4
  },
  {
    component: React.lazy(() => import('pages/Documents')),
    translationKey: 'documents',
    path: DOCUMENTS
  },

  {
    component: React.lazy(() => import('pages/User')),
    translationKey: 'customer',
    path: USER,
    user: true
  },

  {
    component: React.lazy(() => import('pages/Christmas2021')),
    translationKey: 'christmas2021',
    path: CHRISTMAS_2021,
    order: 3,
    icon: 'gift'
  },

  {
    component: React.lazy(() => import('pages/AdminOrders')),
    admin: true,
    translationKey: 'adminOrders',
    path: ADMIN_ORDERS
  },
  {
    component: React.lazy(() => import('pages/AdminNewsletterUsers')),
    admin: true,
    translationKey: 'adminNewsletterUsers',
    path: ADMIN_NEWSLETTER_USERS
  },
  {
    component: React.lazy(() => import('pages/AdminIcons')),
    admin: true,
    translationKey: 'adminIcons',
    path: ADMIN_ICONS
  },
  {
    component: React.lazy(() => import('pages/AdminLabels')),
    admin: true,
    translationKey: 'adminLabels',
    path: ADMIN_LABELS
  },
  {
    component: React.lazy(() => import('pages/AdminCallbacks')),
    admin: true,
    translationKey: 'adminCallbacks',
    path: ADMIN_CALLBACKS
  },
  {
    component: React.lazy(() => import('pages/AdminDeliveryTypes')),
    admin: true,
    translationKey: 'adminDeliveryTypes',
    path: ADMIN_DELIVERY_TYPES
  },
  {
    component: React.lazy(() => import('pages/AdminPaymentTypes')),
    admin: true,
    translationKey: 'adminPaymentTypes',
    path: ADMIN_PAYMENT_TYPES
  },

  {
    component: React.lazy(() => import('pages/AdminMolds')),
    translationKey: 'adminMolds',
    admin: true,
    path: ADMIN_MOLDS
  },

  {
    component: React.lazy(() => import('pages/Home')),
    exact: true,
    translationKey: 'home',
    path: HOME,
    order: 1
  },

  {
    component: React.lazy(() => import('pages/PageNotFound')),
    translationKey: '',
    path: '*'
  }
]

export default routes
