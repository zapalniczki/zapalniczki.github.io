import { Button, LabelledItem, SectionHead, Separator, Tile } from 'components'
import { CHECKOUT_DETAILS } from 'constants/routes'
import { useCheckoutStep, useTranslation } from 'hooks'
import add from 'lodash.add'
import multiply from 'lodash.multiply'
import subtract from 'lodash.subtract'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { calculateDiscount, displayMoney, getVatAmount, sumArray } from 'utils'
import CheckoutTotalLoader from './index.loader'

type Props = {
  customDelivery?: number
  customPayment?: number
  customProducts?: number
}

const CheckoutTotal = ({
  customDelivery,
  customPayment,
  customProducts
}: Props) => {
  const commonT = useTranslation('COMMON').withBase('CHECKOUT_TOTAL')
  const history = useHistory()
  const current = useCheckoutStep()

  const { checkout, voucher } = useContext(checkoutContext)
  const { basket, total: checkoutTotal } = checkout

  const products =
    customProducts !== undefined
      ? customProducts
      : sumArray(
          basket.map((product) => multiply(product.quantity, product.price))
        )

  const delivery =
    customDelivery !== undefined ? customDelivery : checkoutTotal.delivery || 0

  const payment =
    customPayment !== undefined ? customPayment : checkoutTotal.payment || 0

  const cost = add(add(products, delivery), payment)

  let discount = 0
  if (voucher) {
    discount = calculateDiscount(voucher.discount, voucher.is_fixed, cost)
  }

  const total = subtract(cost, discount)
  const vat = getVatAmount(total)

  let nextStepLabel = 'goToCheckout'
  switch (current) {
    case 1:
      nextStepLabel = 'goToDelivery'
      break

    case 2:
      nextStepLabel = 'goToPayment'
      break

    case 3:
      nextStepLabel = 'createOrder'
      break
  }

  const isCart = current === 0

  return (
    <Tile>
      <SectionHead title={commonT('title')} />

      <LabelledItem
        bold={false}
        horizontal
        item={products && displayMoney(products)}
        label={commonT('products')}
      />

      <LabelledItem
        bold={false}
        horizontal
        item={delivery && displayMoney(delivery)}
        label={commonT('delivery')}
      />

      <LabelledItem
        bold={false}
        horizontal
        item={payment && displayMoney(payment)}
        label={commonT('payment')}
      />

      <LabelledItem
        bold={false}
        horizontal
        item={discount && displayMoney(discount, true)}
        label={commonT('discount')}
      />

      <Separator />

      <LabelledItem
        horizontal
        item={displayMoney(total)}
        label={commonT('total')}
      />

      <LabelledItem
        bold={false}
        horizontal
        item={displayMoney(vat)}
        label={commonT('vat')}
      />

      <Button
        icon="arrow-right"
        label={commonT(nextStepLabel)}
        marginTop="l-size"
        onClick={() => isCart && history.push(CHECKOUT_DETAILS)}
        size="medium"
        type={isCart ? 'button' : 'submit'}
      />
    </Tile>
  )
}

export { CheckoutTotalLoader }
export default CheckoutTotal
