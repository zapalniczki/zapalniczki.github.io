import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { i18nextPlugin } from 'translation-check'

import pl from 'cms/pl'
import en from 'cms/en'

export const keySeparator = '.'

i18n
  .use(i18nextPlugin)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    keySeparator: keySeparator,
    resources: {
      pl: {
        ADMIN_CALLBACKS: pl.ADMIN_CALLBACKS,
        ADMIN_DELIVERY_TYPES: pl.ADMIN_DELIVERY_TYPES,
        ADMIN_ICONS: pl.ADMIN_ICONS,
        ADMIN_LABELS: pl.ADMIN_LABELS,
        ADMIN_MOLDS: pl.ADMIN_MOLDS,
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
        COMMON: pl.COMMON,
        CONTACT: pl.CONTACT,
        DELIVERY_AND_PAYMENTS: pl.DELIVERY_AND_PAYMENTS,
        DOCUMENTS: pl.DOCUMENTS,
        HOME: pl.HOME,
        HOW_TO_CREATE_ORDER: pl.HOW_TO_CREATE_ORDER,
        ORDER: pl.ORDER,
        PAGE_NOT_FOUND: pl.PAGE_NOT_FOUND,
        PRODUCTS: pl.PRODUCTS,
        SIGN_IN: pl.SIGN_IN,
        SIGN_UP: pl.SIGN_UP,
        VIEW_PRODUCT: pl.VIEW_PRODUCT,
        USER: pl.USER
      },

      en: {
        ADMIN_CALLBACKS: en.ADMIN_CALLBACKS,
        ADMIN_DELIVERY_TYPES: en.ADMIN_DELIVERY_TYPES,
        ADMIN_ICONS: en.ADMIN_ICONS,
        ADMIN_LABELS: en.ADMIN_LABELS,
        ADMIN_MOLDS: en.ADMIN_MOLDS,
        ADMIN_NEWSLETTER_USERS: en.ADMIN_NEWSLETTER_USERS,
        ADMIN_ORDERS: en.ADMIN_ORDERS,
        ADMIN_PAYMENT_TYPES: en.ADMIN_PAYMENT_TYPES,

        CHECKOUT_DELIVERY: en.CHECKOUT_DELIVERY,
        CHECKOUT_DETAILS: en.CHECKOUT_DETAILS,
        CHECKOUT_PAYMENT: en.CHECKOUT_PAYMENT,
        CART: en.CART,
        CHECKOUT_RESULT: en.CHECKOUT_RESULT,

        CHRISTMAS_2021: en.CHRISTMAS_2021,
        COMMON: en.COMMON,
        CONTACT: en.CONTACT,
        DELIVERY_AND_PAYMENTS: en.DELIVERY_AND_PAYMENTS,
        DOCUMENTS: en.DOCUMENTS,
        HOME: en.HOME,
        HOW_TO_CREATE_ORDER: en.HOW_TO_CREATE_ORDER,
        ORDER: en.ORDER,
        PAGE_NOT_FOUND: en.PAGE_NOT_FOUND,
        PRODUCTS: en.PRODUCTS,
        SIGN_IN: en.SIGN_IN,
        SIGN_UP: en.SIGN_UP,
        VIEW_PRODUCT: en.VIEW_PRODUCT,
        USER: en.USER
      }
    }
  })

export type TranslationsNamespace = keyof typeof pl

export default i18n
