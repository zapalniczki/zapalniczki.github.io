import {
  ADMIN_CALLBACKS,
  ADMIN_NEWSLETTER_USERS,
  ADMIN_ORDERS
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
  }
]

export default adminLinks
