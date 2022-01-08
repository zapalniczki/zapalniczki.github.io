import {
  ADMIN_CALLBACKS,
  ADMIN_DELIVERY_TYPES,
  ADMIN_ICONS,
  ADMIN_LABELS,
  ADMIN_MOLDS,
  ADMIN_ORDERS,
  ADMIN_PAYMENT_TYPES,
  CART,
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT,
  CHECKOUT_RESULT,
  CHRISTMAS_2021,
  COMPANY_OFFER,
  CONTACT,
  DELIVERY_AND_PAYMENTS,
  DOCUMENTS,
  HOME,
  HOW_TO_CREATE_ORDER,
  ORDERS_ID,
  PRODUCTS,
  PRODUCTS_ID,
  SIGNED_OUT,
  SIGN_IN,
  SIGN_UP,
  USER,
  VALENTINES_DAY
} from 'constants/routes'

import React from 'react'

export type Route = {
  Component: React.LazyExoticComponent<() => JSX.Element>
  admin?: boolean
  end?: boolean
  icon?: 'gift' | 'heart'
  key: RouteKey
  order?: number
  path: string
  user?: boolean
}

const routes: Route[] = [
  {
    Component: React.lazy(() => import('pages/Products')),
    end: true,
    path: PRODUCTS,
    order: 2,
    key: 'products'
  },
  {
    Component: React.lazy(() => import('pages/ViewProduct')),
    path: PRODUCTS_ID,
    key: 'viewProduct'
  },
  {
    Component: React.lazy(() => import('pages/checkout/Cart')),
    path: CART,
    key: 'cart'
  },
  {
    Component: React.lazy(() => import('pages/checkout/CheckoutDetails')),
    path: CHECKOUT_DETAILS,
    key: 'checkoutDetails'
  },
  {
    Component: React.lazy(() => import('pages/checkout/CheckoutDelivery')),
    path: CHECKOUT_DELIVERY,
    key: 'checkoutDelivery'
  },
  {
    Component: React.lazy(() => import('pages/checkout/CheckoutPayment')),
    path: CHECKOUT_PAYMENT,
    key: 'checkoutPayment'
  },
  {
    Component: React.lazy(() => import('pages/checkout/CheckoutResult')),
    path: CHECKOUT_RESULT,
    key: 'checkoutResult'
  },
  {
    Component: React.lazy(() => import('pages/Order')),
    path: ORDERS_ID,
    key: 'order'
  },
  {
    Component: React.lazy(() => import('pages/CompanyOffer')),
    path: COMPANY_OFFER,
    key: 'companyOffer',
    order: 4
  },
  {
    Component: React.lazy(() => import('pages/SignIn')),
    path: SIGN_IN,
    key: 'signIn'
  },
  {
    Component: React.lazy(() => import('pages/SignUp')),
    path: SIGN_UP,
    key: 'signUp'
  },
  {
    Component: React.lazy(() => import('pages/Contact')),
    path: CONTACT,
    order: 7,
    key: 'contact'
  },
  {
    Component: React.lazy(() => import('pages/SignedOut')),
    path: SIGNED_OUT,
    key: 'signedOut'
  },
  {
    Component: React.lazy(() => import('pages/DeliveryAndPayments')),
    path: DELIVERY_AND_PAYMENTS,
    end: true,
    order: 6,
    key: 'deliveryAndPayments'
  },
  {
    Component: React.lazy(() => import('pages/HowToCreateOrder')),
    path: HOW_TO_CREATE_ORDER,
    key: 'howToCreateOrder'
  },
  {
    Component: React.lazy(() => import('pages/Documents')),
    path: DOCUMENTS,
    key: 'documents'
  },

  {
    Component: React.lazy(() => import('pages/User')),
    path: USER,
    user: true,
    key: 'customer'
  },

  {
    Component: React.lazy(() => import('pages/Christmas2021')),
    path: CHRISTMAS_2021,
    order: 3,
    icon: 'gift',
    key: 'christmas'
  },

  {
    Component: React.lazy(() => import('pages/ValentinesDay')),
    path: VALENTINES_DAY,
    order: 3,
    icon: 'heart',
    key: 'valentinesDay'
  },

  {
    Component: React.lazy(() => import('pages/AdminOrders')),
    admin: true,
    path: ADMIN_ORDERS,
    key: 'adminOrders'
  },
  {
    Component: React.lazy(() => import('pages/AdminIcons')),
    admin: true,
    path: ADMIN_ICONS,
    key: 'adminIcons'
  },
  {
    Component: React.lazy(() => import('pages/AdminLabels')),
    admin: true,
    path: ADMIN_LABELS,
    key: 'adminLabels'
  },
  {
    Component: React.lazy(() => import('pages/AdminCallbacks')),
    admin: true,
    path: ADMIN_CALLBACKS,
    key: 'adminCallbacks'
  },
  {
    Component: React.lazy(() => import('pages/AdminDeliveryTypes')),
    admin: true,
    path: ADMIN_DELIVERY_TYPES,
    key: 'adminDeliveryTypes'
  },
  {
    Component: React.lazy(() => import('pages/AdminPaymentTypes')),
    admin: true,
    path: ADMIN_PAYMENT_TYPES,
    key: 'adminPaymentTypes'
  },

  {
    Component: React.lazy(() => import('pages/AdminMolds')),
    admin: true,
    path: ADMIN_MOLDS,
    key: 'adminMolds'
  },

  {
    Component: React.lazy(() => import('pages/Home')),
    end: true,
    path: HOME,
    order: 1,
    key: 'home'
  },

  {
    Component: React.lazy(() => import('pages/PageNotFound')),
    path: '*',
    key: '_404'
  }
]

export default routes

type RouteKey =
  | '_404'
  | 'adminCallbacks'
  | 'adminDeliveryTypes'
  | 'adminIcons'
  | 'adminLabels'
  | 'adminMolds'
  | 'adminOrders'
  | 'adminPaymentTypes'
  | 'cart'
  | 'checkoutDelivery'
  | 'checkoutDetails'
  | 'checkoutPayment'
  | 'checkoutResult'
  | 'christmas'
  | 'companyOffer'
  | 'contact'
  | 'customer'
  | 'deliveryAndPayments'
  | 'documents'
  | 'home'
  | 'howToCreateOrder'
  | 'order'
  | 'products'
  | 'signIn'
  | 'signUp'
  | 'signedOut'
  | 'valentinesDay'
  | 'viewProduct'
