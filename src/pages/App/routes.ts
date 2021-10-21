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
    translationKey: 'products',
    path: PRODUCTS,
    order: 2
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
    translationKey: 'adminOrders',
    path: ADMIN_ORDERS
  },
  {
    component: React.lazy(() => import('pages/Contact')),
    translationKey: 'contact',
    path: CONTACT,
    order: 5
  },
  {
    component: React.lazy(() => import('pages/DeliveryAndPayments')),
    translationKey: 'deliveryAndPayments',
    path: DELIVERY_AND_PAYMENTS,
    exact: true,
    order: 4
  },
  {
    component: React.lazy(() => import('pages/HowToCreateOrder')),
    translationKey: 'howToCreateOrder',
    path: HOW_TO_CREATE_ORDER,
    order: 3
  },
  {
    component: React.lazy(() => import('pages/Documents')),
    translationKey: 'documents',
    path: DOCUMENTS
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