import { Button, Flexbox } from 'components'
import { CART, CHECKOUT_DELIVERY, CHECKOUT_DETAILS } from 'constants/routes'
import { useTranslation } from 'hooks'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useCheckoutStep } from '.'

const Actions = () => {
  const commonT = useTranslation('COMMON').withBase('CHECKOUT_ACTIONS')
  const history = useHistory()

  const current = useCheckoutStep()
  const { isBasketEmpty } = useContext(checkoutContext)

  const onClickPrevious = () => {
    switch (current) {
      case 1:
        history.push(CART)
        break

      case 2:
        history.push(CHECKOUT_DETAILS)
        break

      case 3:
        history.push(CHECKOUT_DELIVERY)
        break

      case 4:
        history.push(CHECKOUT_DELIVERY)
        break

      default:
        break
    }
  }

  return (
    <Flexbox
      alignItems="center"
      justifyContent="space-between"
      marginTop="3rem"
    >
      <Button
        label={commonT('back')}
        onClick={onClickPrevious}
        size="medium"
        type="button"
        variant="secondary"
      />

      <Button
        disabled={isBasketEmpty}
        icon="arrow-right"
        label={commonT(current === 4 ? 'createOrder' : 'next')}
        size="medium"
        type="submit"
      />
    </Flexbox>
  )
}

export default Actions
