import { useHistory } from 'react-router-dom'
import React, { useContext } from 'react'
import { useTranslation } from 'hooks'
import { checkoutContext } from 'providers'
import {
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PRODUCTS,
  PRODUCTS
} from 'constants/routes'
import { Flexbox, Button } from 'components'
import { useCheckoutStep } from './StepTracker'

const Actions = () => {
  const { t } = useTranslation('COMMON')
  const history = useHistory()

  const current = useCheckoutStep()
  const { checkout } = useContext(checkoutContext)

  const isBasketEmpty = checkout.basket.length === 0

  const onClickPrevious = () => {
    switch (current) {
      case 1:
        history.push(PRODUCTS)
        break

      case 2:
        history.push(CHECKOUT_PRODUCTS)
        break

      case 3:
        history.push(CHECKOUT_DETAILS)
        break

      case 4:
        history.push(CHECKOUT_DELIVERY)
        break

      case 5:
        history.push(CHECKOUT_DELIVERY)
        break

      default:
        break
    }
  }

  const isFirstPage = current === 1
  const onClickNext = () => {
    if (isFirstPage) {
      history.push(CHECKOUT_DETAILS)
    }
  }

  return (
    <Flexbox
      alignItems="center"
      justifyContent="space-between"
      marginTop="3rem"
    >
      <Button
        label={t(
          isFirstPage ? 'checkoutActions.backToShop' : 'checkoutActions.back'
        )}
        onClick={onClickPrevious}
        size="medium"
        type="button"
        variant="secondary"
      />

      <Button
        disabled={isBasketEmpty}
        icon="arrow-right"
        label={t(
          current === 5 ? 'checkoutActions.createOrder' : 'checkoutActions.next'
        )}
        onClick={onClickNext}
        size="medium"
        type={isFirstPage ? 'button' : 'submit'}
      />
    </Flexbox>
  )
}

export default Actions
