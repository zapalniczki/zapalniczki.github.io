import i18n, { InitOptions } from 'i18next'
import pl from 'cms/pl'

export const config: InitOptions = {
  lng: 'pl',
  keySeparator: '.',
  resources: {
    pl: {
      ADMIN_CALLBACKS: pl.ADMIN_CALLBACKS,
      ADMIN_DELIVERY_TYPES: pl.ADMIN_DELIVERY_TYPES,
      ADMIN_NEWSLETTER_USERS: pl.ADMIN_NEWSLETTER_USERS,
      ADMIN_ORDERS: pl.ADMIN_ORDERS,
      ADMIN_PAYMENT_TYPES: pl.ADMIN_PAYMENT_TYPES,

      CHECKOUT_DELIVERY: pl.CHECKOUT_DELIVERY,
      CHECKOUT_DETAILS: pl.CHECKOUT_DETAILS,
      CHECKOUT_PAYMENT: pl.CHECKOUT_PAYMENT,
      CHECKOUT_PRODUCTS: pl.CHECKOUT_PRODUCTS,
      CHECKOUT_RESULT: pl.CHECKOUT_RESULT,
      CHECKOUT_SHIPPING: pl.CHECKOUT_SHIPPING,
      COMMON: pl.COMMON,
      CONTACT: pl.CONTACT,
      DELIVERY_AND_PAYMENTS: pl.DELIVERY_AND_PAYMENTS,
      DOCUMENTS: pl.DOCUMENTS,
      HOME: pl.HOME,
      HOW_TO_CREATE_ORDER: pl.HOW_TO_CREATE_ORDER,
      PAGE_NOT_FOUND: pl.PAGE_NOT_FOUND,
      PRODUCTS: pl.PRODUCTS,
      VIEW_PRODUCT: pl.VIEW_PRODUCT
    }
  }
}

export type TranslationsNamespace = keyof typeof pl

i18n.init(config)

export default i18n
