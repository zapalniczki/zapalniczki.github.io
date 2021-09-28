import i18n, { InitOptions } from 'i18next'
import pl from 'cms/pl'

export const config: InitOptions = {
  lng: 'pl',
  keySeparator: '.',
  resources: {
    pl: {
      ADMIN_ORDERS: pl.ADMIN_ORDERS,
      CHECKOUT_PRODUCTS: pl.CHECKOUT_PRODUCTS,
      CHECKOUT_DETAILS: pl.CHECKOUT_DETAILS,
      CHECKOUT_PAYMENT: pl.CHECKOUT_PAYMENT,
      CHECKOUT_DELIVERY: pl.CHECKOUT_DELIVERY,
      CHECKOUT_RESULT: pl.CHECKOUT_RESULT,
      CHECKOUT_SHIPPING: pl.CHECKOUT_SHIPPING,
      COMMON: pl.COMMON,
      CONTACT: pl.CONTACT,
      HOME: pl.HOME,
      PAGE_NOT_FOUND: pl.PAGE_NOT_FOUND,
      PRODUCTS: pl.PRODUCTS,
      VIEW_PRODUCT: pl.VIEW_PRODUCT,
      DELIVERY_AND_PAYMENTS: pl.DELIVERY_AND_PAYMENTS,
      HOW_TO_CREATE_ORDER: pl.HOW_TO_CREATE_ORDER,
      DOCUMENTS: pl.DOCUMENTS
    }
  }
}

export type TranslationsNamespace = keyof typeof pl

i18n.init(config)

export default i18n
