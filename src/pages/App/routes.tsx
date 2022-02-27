import { ROUTES } from 'braty-common'

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
    path: ROUTES.PRODUCTS,
    order: 3,
    key: 'products'
  },
  {
    Component: React.lazy(() => import('pages/ViewProduct')),
    path: ROUTES.PRODUCTS_ID,
    key: 'viewProduct'
  },
  {
    Component: React.lazy(() => import('pages/checkout/Cart')),
    path: ROUTES.CART,
    key: 'cart'
  },
  {
    Component: React.lazy(() => import('pages/checkout/CheckoutDetails')),
    path: ROUTES.CHECKOUT_DETAILS,
    key: 'checkoutDetails'
  },
  {
    Component: React.lazy(() => import('pages/checkout/CheckoutDelivery')),
    path: ROUTES.CHECKOUT_DELIVERY,
    key: 'checkoutDelivery'
  },
  {
    Component: React.lazy(() => import('pages/checkout/CheckoutPayment')),
    path: ROUTES.CHECKOUT_PAYMENT,
    key: 'checkoutPayment'
  },
  {
    Component: React.lazy(() => import('pages/checkout/CheckoutResult')),
    path: ROUTES.CHECKOUT_RESULT,
    key: 'checkoutResult'
  },
  {
    Component: React.lazy(() => import('pages/Order')),
    path: ROUTES.ORDERS_ID,
    key: 'order'
  },
  {
    Component: React.lazy(() => import('pages/CompanyOffer')),
    path: ROUTES.COMPANY_OFFER,
    key: 'companyOffer',
    order: 5
  },
  {
    Component: React.lazy(() => import('pages/SignIn')),
    path: ROUTES.SIGN_IN,
    key: 'signIn'
  },
  {
    Component: React.lazy(() => import('pages/SignUp')),
    path: ROUTES.SIGN_UP,
    key: 'signUp'
  },
  {
    Component: React.lazy(() => import('pages/Contact')),
    path: ROUTES.CONTACT,
    order: 7,
    key: 'contact'
  },
  {
    Component: React.lazy(() => import('pages/SignedOut')),
    path: ROUTES.SIGNED_OUT,
    key: 'signedOut'
  },
  {
    Component: React.lazy(() => import('pages/DeliveryAndPayments')),
    path: ROUTES.DELIVERY_AND_PAYMENTS,
    end: true,
    order: 6,
    key: 'deliveryAndPayments'
  },
  {
    Component: React.lazy(() => import('pages/HowToCreateOrder')),
    path: ROUTES.HOW_TO_CREATE_ORDER,
    key: 'howToCreateOrder'
  },
  {
    Component: React.lazy(() => import('pages/Documents')),
    path: ROUTES.DOCUMENTS,
    key: 'documents'
  },

  {
    Component: React.lazy(() => import('pages/User')),
    path: ROUTES.USER,
    // TODO This should be true
    // user: true,
    // TODO Customer or user? Should be unified across
    key: 'customer'
  },

  {
    Component: React.lazy(() => import('pages/Christmas2021')),
    path: ROUTES.CHRISTMAS_2021,
    order: 2,
    icon: 'gift',
    key: 'christmas'
  },

  {
    Component: React.lazy(() => import('pages/ValentinesDay')),
    path: ROUTES.VALENTINES_DAY,
    order: 2,
    icon: 'heart',
    key: 'valentinesDay'
  },

  {
    Component: React.lazy(() => import('pages/Europe')),
    path: ROUTES.EUROPE,
    order: 4,
    key: 'europe'
  },

  {
    Component: React.lazy(() => import('pages/AdminOrders')),
    admin: true,
    path: ROUTES.ADMIN_ORDERS,
    key: 'adminOrders'
  },
  {
    Component: React.lazy(() => import('pages/AdminIcons')),
    admin: true,
    path: ROUTES.ADMIN_ICONS,
    key: 'adminIcons'
  },
  {
    Component: React.lazy(() => import('pages/AdminLabels')),
    admin: true,
    path: ROUTES.ADMIN_LABELS,
    key: 'adminLabels'
  },
  {
    Component: React.lazy(() => import('pages/AdminCallbacks')),
    admin: true,
    path: ROUTES.ADMIN_CALLBACKS,
    key: 'adminCallbacks'
  },
  {
    Component: React.lazy(() => import('pages/AdminMarketing')),
    admin: true,
    path: ROUTES.ADMIN_MARKETING,
    key: 'adminMarketing'
  },
  {
    Component: React.lazy(() => import('pages/AdminDeliveryTypes')),
    admin: true,
    path: ROUTES.ADMIN_DELIVERY_TYPES,
    key: 'adminDeliveryTypes'
  },
  {
    Component: React.lazy(() => import('pages/AdminPaymentTypes')),
    admin: true,
    path: ROUTES.ADMIN_PAYMENT_TYPES,
    key: 'adminPaymentTypes'
  },

  {
    Component: React.lazy(() => import('pages/AdminMolds')),
    admin: true,
    path: ROUTES.ADMIN_MOLDS,
    key: 'adminMolds'
  },

  {
    Component: React.lazy(() => import('pages/Home')),
    end: true,
    path: ROUTES.HOME,
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
  | 'adminMarketing'
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
  | 'europe'
  | 'home'
  | 'howToCreateOrder'
  | 'order'
  | 'products'
  | 'signIn'
  | 'signUp'
  | 'signedOut'
  | 'valentinesDay'
  | 'viewProduct'
