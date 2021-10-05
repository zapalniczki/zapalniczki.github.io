import {
  ADMIN_CALLBACKS,
  ADMIN_DELIVERY_TYPES,
  ADMIN_NEWSLETTER_USERS,
  ADMIN_ORDERS,
  ADMIN_PAYMENT_TYPES
} from 'constants/routes'

const adminLinks = [
  {
    label: 'orders',
    to: ADMIN_ORDERS
  },
  {
    label: 'newsletterUsers',
    to: ADMIN_NEWSLETTER_USERS
  },
  {
    label: 'callbacks',
    to: ADMIN_CALLBACKS
  },
  {
    label: 'deliveryTypes',
    to: ADMIN_DELIVERY_TYPES
  },
  {
    label: 'paymentTypes',
    to: ADMIN_PAYMENT_TYPES
  }
]

export default adminLinks
