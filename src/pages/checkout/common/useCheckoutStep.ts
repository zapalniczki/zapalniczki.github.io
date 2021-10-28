import {
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT,
  CHECKOUT_PRODUCTS,
  CHECKOUT_SHIPPING
} from 'constants/routes'
import { useLocation } from 'react-router'

const useCheckoutStep = () => {
  const { pathname } = useLocation()

  let current = 0

  if (pathname.includes(CHECKOUT_PRODUCTS)) {
    current = 1
  } else if (pathname.includes(CHECKOUT_DETAILS)) {
    current = 2
  } else if (pathname.includes(CHECKOUT_DELIVERY)) {
    current = 3
  } else if (pathname.includes(CHECKOUT_SHIPPING)) {
    current = 4
  } else if (pathname.includes(CHECKOUT_PAYMENT)) {
    current = 5
  }

  return current
}

export default useCheckoutStep
