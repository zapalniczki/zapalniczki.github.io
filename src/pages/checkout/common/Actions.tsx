import { useHistory } from 'react-router-dom'
import React, { useContext } from 'react'
import { useTranslation } from 'hooks'
import { basketContext } from 'providers/BasketProvider'
import {
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PRODUCTS,
  PRODUCTS
} from 'constants/routes'
import { Flexbox, Box, Button } from 'components'
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
      marginTop="3rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        size="medium"
        variant="secondary"
        onClick={onClickPrevious}
        type="button"
      >
        {t(isFirstPage ? 'checkoutActions.backToShop' : 'checkoutActions.back')}
      </Button>
      <Button
        size="medium"
        disabled={isBasketEmpty || primaryDisabled}
        onClick={onClickNext}
        type={isFirstPage ? 'button' : 'submit'}
        icon="arrow-right"
      >
        <Box marginRight="s-size">
          {t(
            current === 5
              ? 'checkoutActions.createOrder'
              : 'checkoutActions.next'
          )}
        </Box>
      </Button>
    </Flexbox>
  )
}

export default Actions
