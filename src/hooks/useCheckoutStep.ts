import {
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT
} from 'constants/routes'
import { useLocation } from 'react-router'

const useCheckoutStep = () => {
  const { pathname } = useLocation()

  let current = 0
  if (pathname.includes(CHECKOUT_DETAILS)) {
    current = 1
  } else if (pathname.includes(CHECKOUT_DELIVERY)) {
    current = 2
  } else if (pathname.includes(CHECKOUT_PAYMENT)) {
    current = 4
  }

  return current
}

export default useCheckoutStep
