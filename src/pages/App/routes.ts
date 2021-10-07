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
  PRODUCTS,
  VIEW_PRODUCT
} from 'constants/routes'

import {
  AdminCallbacks,
  AdminDeliveryTypes,
  AdminNewsletterUsers,
  AdminOrders,
  AdminPaymentTypes,
  CheckoutDelivery,
  CheckoutDetails,
  CheckoutPayment,
  CheckoutProducts,
  CheckoutResult,
  CheckoutShipping,
  Contact,
  Documents,
  HowToCreateOrder,
  PageNotFound,
  ViewProduct,
  Products
} from 'pages'

import React from 'react'

const routes = [
  {
    component: Products,
    exact: true,
    path: PRODUCTS
  },
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
    component: React.lazy(() => import('pages/DeliveryAndPayments')),
    path: DELIVERY_AND_PAYMENTS,
    exact: true
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
    component: React.lazy(() => import('pages/Home')),
    exact: true,
    path: HOME
  },

  {
    component: PageNotFound,
    path: '*'
  }
]

console.log(routes)

export default routes
