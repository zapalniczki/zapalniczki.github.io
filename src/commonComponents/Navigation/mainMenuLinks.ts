import {
  CONTACT,
  DELIVERY_AND_PAYMENTS,
  HOME,
  HOW_TO_CREATE_ORDER,
  PRODUCTS
} from 'constants/routes'

const mainMenuLinks = [
  {
    exact: true,
    to: HOME,
    label: 'navigation.home'
  },

  {
    to: PRODUCTS,
    label: 'navigation.products'
  },

  {
    to: HOW_TO_CREATE_ORDER,
    label: 'navigation.HOW_TO_CREATE_ORDER'
  },

  {
    to: DELIVERY_AND_PAYMENTS,
    label: 'navigation.deliveryAndPayments'
  },

  {
    to: CONTACT,
    label: 'navigation.contact'
  }
]

export default mainMenuLinks
