import { useHistory } from 'react-router-dom'
import React, { useContext } from 'react'
import { useTranslation } from 'hooks'
import { basketContext } from 'providers'
import {
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PRODUCTS,
  PRODUCTS
} from 'constants/routes'
import { Flexbox, Button } from 'components'
import { useCheckoutStep } from './StepTracker'

type Props = {
  primaryDisabled?: boolean
}

const Actions = ({ primaryDisabled }: Props) => {
  const { t } = useTranslation('COMMON')
  const history = useHistory()

  const current = useCheckoutStep()
  const { basketLength } = useContext(basketContext)

  const isBasketEmpty = basketLength === 0

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
        onClick={onClickPrevious}
        size="medium"
        type="button"
        variant="secondary"
      >
        {t(isFirstPage ? 'checkoutActions.backToShop' : 'checkoutActions.back')}
      </Button>
      <Button
        disabled={isBasketEmpty || primaryDisabled}
        icon="arrow-right"
        onClick={onClickNext}
        size="medium"
        type={isFirstPage ? 'button' : 'submit'}
      >
        {t(
          current === 5 ? 'checkoutActions.createOrder' : 'checkoutActions.next'
        )}
      </Button>
    </Flexbox>
  )
}

export default Actions
