import { basketContext } from 'providers'
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Badge, Button } from 'components'
import { basketToggleContext } from 'providers'
import {
  CHECKOUT_PAYMENT,
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PRODUCTS,
  CHECKOUT_SHIPPING,
  CHECKOUT_RESULT
} from 'constants/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BasketToggle = () => {
  const { pathname } = useLocation()
  const { basket } = useContext(basketContext)
  const { setIsOpen } = useContext(basketToggleContext)

  return (
    <Button
      disabled={basketDisabledpathnames.includes(pathname)}
      onClick={() => setIsOpen((prev) => !prev)}
      padding="s-size"
      type="button"
      variant="quaternary"
    >
      <Badge count={basket.length}>
        <FontAwesomeIcon icon="shopping-basket" size="2x" />
      </Badge>
    </Button>
  )
}

const basketDisabledpathnames = [
  CHECKOUT_PRODUCTS,
  CHECKOUT_DETAILS,
  CHECKOUT_DELIVERY,
  CHECKOUT_SHIPPING,
  CHECKOUT_PAYMENT,
  CHECKOUT_RESULT
]

export default BasketToggle
