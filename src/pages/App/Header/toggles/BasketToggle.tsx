import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ROUTES } from 'braty-common'
import { Badge, Button } from 'components'
import { useTranslation } from 'hooks'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

const BasketToggle = () => {
  const { t: commonT } = useTranslation('COMMON')

  const { pathname } = useLocation()
  const { productCount } = useContext(checkoutContext)
  const { setBasketOpen } = useContext(togglesContext)

  return (
    <Button
      disabled={basketDisabledpathnames.includes(pathname)}
      onClick={() => setBasketOpen((prev) => !prev)}
      padding="s-size"
      title={commonT('basketToggleLabel')}
      type="button"
      variant="quaternary"
    >
      <Badge count={productCount}>
        <FontAwesomeIcon icon="shopping-basket" size="2x" />
      </Badge>
    </Button>
  )
}

const basketDisabledpathnames = [
  ROUTES.CART as string,
  ROUTES.CHECKOUT_DETAILS as string,
  ROUTES.CHECKOUT_DELIVERY as string,
  ROUTES.CHECKOUT_PAYMENT as string,
  ROUTES.CHECKOUT_RESULT as string
]

export default BasketToggle
