import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { i18nextPlugin } from 'translation-check'

import { pl, en } from 'cms'
import { Language } from 'braty-common'

export const keySeparator = '.'
export const FALLBACK_LANGUAGE: Language = 'en'

const namespacesPL = {
  ADMIN_CALLBACKS: pl.ADMIN_CALLBACKS,
  ADMIN_DELIVERY_TYPES: pl.ADMIN_DELIVERY_TYPES,
  ADMIN_ICONS: pl.ADMIN_ICONS,
  ADMIN_LABELS: pl.ADMIN_LABELS,
  ADMIN_MOLDS: pl.ADMIN_MOLDS,
  ADMIN_MARKETING: pl.ADMIN_MARKETING,
  ADMIN_NEWSLETTER_USERS: pl.ADMIN_NEWSLETTER_USERS,
  ADMIN_ORDERS: pl.ADMIN_ORDERS,
  ADMIN_PAYMENT_TYPES: pl.ADMIN_PAYMENT_TYPES,

  CHECKOUT_DELIVERY: pl.CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS: pl.CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT: pl.CHECKOUT_PAYMENT,
  CART: pl.CART,
  CHECKOUT_RESULT: pl.CHECKOUT_RESULT,

  VALENTINES_2022: pl.VALENTINES_2022,
  CHRISTMAS_2021: pl.CHRISTMAS_2021,
  EUROPE: pl.EUROPE,

  HOME: pl.HOME,
  VIEW_PRODUCT: pl.VIEW_PRODUCT,
  PRODUCTS: pl.PRODUCTS,
  HOW_TO_CREATE_ORDER: pl.HOW_TO_CREATE_ORDER,
  DELIVERY_AND_PAYMENTS: pl.DELIVERY_AND_PAYMENTS,
  CONTACT: pl.CONTACT,

  COMMON: pl.COMMON,

  PAGE_NOT_FOUND: pl.PAGE_NOT_FOUND,

  DOCUMENTS: pl.DOCUMENTS,
  ORDER: pl.ORDER,
  SIGN_IN: pl.SIGN_IN,
  SIGN_UP: pl.SIGN_UP,
  CUSTOMER: pl.CUSTOMER
}

const namespacesEN: Namespaces = {
  ADMIN_CALLBACKS: en.ADMIN_CALLBACKS,
  ADMIN_DELIVERY_TYPES: en.ADMIN_DELIVERY_TYPES,
  ADMIN_ICONS: en.ADMIN_ICONS,
  ADMIN_LABELS: en.ADMIN_LABELS,
  ADMIN_MOLDS: en.ADMIN_MOLDS,
  ADMIN_MARKETING: en.ADMIN_MARKETING,
  ADMIN_NEWSLETTER_USERS: en.ADMIN_NEWSLETTER_USERS,
  ADMIN_ORDERS: en.ADMIN_ORDERS,
  ADMIN_PAYMENT_TYPES: en.ADMIN_PAYMENT_TYPES,
  CHECKOUT_DELIVERY: en.CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS: en.CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT: en.CHECKOUT_PAYMENT,
  CART: en.CART,
  CHECKOUT_RESULT: en.CHECKOUT_RESULT,

  VALENTINES_2022: en.VALENTINES_2022,
  CHRISTMAS_2021: en.CHRISTMAS_2021,
  EUROPE: en.EUROPE,

  COMMON: en.COMMON,
  PAGE_NOT_FOUND: en.PAGE_NOT_FOUND,

  HOME: en.HOME,
  PRODUCTS: en.PRODUCTS,
  VIEW_PRODUCT: en.VIEW_PRODUCT,
  DELIVERY_AND_PAYMENTS: en.DELIVERY_AND_PAYMENTS,
  HOW_TO_CREATE_ORDER: en.HOW_TO_CREATE_ORDER,
  CONTACT: en.CONTACT,

  DOCUMENTS: en.DOCUMENTS,

  SIGN_IN: en.SIGN_IN,
  SIGN_UP: en.SIGN_UP,

  ORDER: en.ORDER,
  CUSTOMER: en.CUSTOMER
}

i18n
  .use(i18nextPlugin)
  .use(LanguageDetector)
  .init({
    fallbackLng: FALLBACK_LANGUAGE,
    keySeparator,
    resources: {
      pl: namespacesPL,
      en: namespacesEN
    }
  })

export type TranslationsNamespace = keyof typeof pl
type Namespaces = typeof namespacesPL

export default i18n
