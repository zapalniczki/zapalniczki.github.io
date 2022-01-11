import { ROUTES } from 'braty-common'
import { useLocation } from 'react-router'

const useCheckoutStep = () => {
  const { pathname } = useLocation()

  let current = 0
  if (pathname.includes(ROUTES.CHECKOUT_DETAILS)) {
    current = 1
  } else if (pathname.includes(ROUTES.CHECKOUT_DELIVERY)) {
    current = 2
  } else if (pathname.includes(ROUTES.CHECKOUT_PAYMENT)) {
    current = 3
  }

  return current
}

export default useCheckoutStep
