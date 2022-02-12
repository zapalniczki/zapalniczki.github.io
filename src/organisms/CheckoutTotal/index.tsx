import {
  BRATY_ADDRESS_1,
  BRATY_ADDRESS_2,
  BRATY_ADDRESS_3,
  BRATY_NAME,
  ROUTES
} from 'braty-common'
import {
  Button,
  LabelledItem,
  SectionHead,
  Separator,
  Text,
  Tile
} from 'components'
import { useCheckoutStep, useTranslation } from 'hooks'
import add from 'lodash.add'
import multiply from 'lodash.multiply'
import subtract from 'lodash.subtract'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  calculateDiscount,
  displayMoney,
  getLanguagePrice,
  getVatAmount,
  sumArray
} from 'utils'
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
  const { currentLanguage } = useTranslation('COMMON')
  const navigate = useNavigate()
  const current = useCheckoutStep()

  const { checkout, voucher } = useContext(checkoutContext)
  const { basket, total: checkoutTotal } = checkout

  const products =
    customProducts !== undefined
      ? customProducts
      : sumArray(
          basket.map((product) =>
            multiply(
              product.quantity,
              getLanguagePrice({
                language: currentLanguage,
                price: product
              })
            )
          )
        )

  const delivery =
    customDelivery !== undefined
      ? customDelivery
      : checkoutTotal[`delivery_${currentLanguage}`] || 0

  const payment =
    customPayment !== undefined
      ? customPayment
      : checkoutTotal[`payment_${currentLanguage}`] || 0

  const cost = add(add(products, delivery), payment)

  let discount = 0
  if (voucher) {
    discount = calculateDiscount(
      voucher[`discount_${currentLanguage}`],
      voucher.is_fixed,
      cost
    )
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
  const isLast = current === 3

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
        onClick={() => isCart && navigate(ROUTES.CHECKOUT_DETAILS)}
        size="medium"
        type={isCart ? 'button' : 'submit'}
      />

      {isLast && (
        <Text lineHeight="1.6" marginTop="m-size" type="caption">
          {commonT('info', {
            interpolation: { escapeValue: false },
            address: `${BRATY_ADDRESS_1}, ${BRATY_ADDRESS_2}, ${BRATY_ADDRESS_3}`,
            companyName: BRATY_NAME
          })}
        </Text>
      )}
    </Tile>
  )
}

export { CheckoutTotalLoader }
export default CheckoutTotal
