import {
  BRATY_ADDRESS_1,
  BRATY_ADDRESS_2,
  BRATY_ADDRESS_3,
  BRATY_NAME,
  ROUTES
} from 'braty-common'
import {
  Button,
  DisplayMoney,
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
  const { language } = useTranslation('COMMON')
  const navigate = useNavigate()
  const current = useCheckoutStep()

  const { checkout, setCheckout, voucher } = useContext(checkoutContext)
  const { basket, total: checkoutTotal } = checkout

  const products =
    customProducts !== undefined
      ? customProducts
      : sumArray(
          basket.map((product) =>
            multiply(
              product.quantity,
              getLanguagePrice({
                language,
                price: product
              })
            )
          )
        )

  const delivery =
    customDelivery !== undefined
      ? customDelivery
      : checkoutTotal[`delivery_${language}`] || 0

  const payment =
    customPayment !== undefined
      ? customPayment
      : checkoutTotal[`payment_${language}`] || 0

  const cost = add(add(products, delivery), payment)

  let discount = 0
  if (voucher) {
    discount = calculateDiscount(
      voucher[`discount_${language}`],
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
        item={products && <DisplayMoney>{products}</DisplayMoney>}
        label={commonT('products')}
      />

      <LabelledItem
        bold={false}
        horizontal
        item={delivery && <DisplayMoney>{delivery}</DisplayMoney>}
        label={commonT('delivery')}
      />

      <LabelledItem
        bold={false}
        horizontal
        item={payment && <DisplayMoney>{payment}</DisplayMoney>}
        label={commonT('payment')}
      />

      <LabelledItem
        bold={false}
        horizontal
        item={discount && <DisplayMoney negative>{discount}</DisplayMoney>}
        label={commonT('discount')}
      />

      <Separator />

      <LabelledItem
        green
        horizontal
        item={<DisplayMoney>{total}</DisplayMoney>}
        label={commonT('total')}
      />

      <LabelledItem
        bold={false}
        horizontal
        label={commonT('vat')}
        labelTextType="caption"
      >
        <Text type="caption">
          <DisplayMoney>{vat}</DisplayMoney>
        </Text>
      </LabelledItem>

      <Button
        icon="arrow-right"
        label={commonT(nextStepLabel)}
        marginTop="l-size"
        onClick={() => {
          if (isCart) {
            navigate(ROUTES.CHECKOUT_DETAILS)
            setCheckout((prev) => ({
              ...prev,
              processStarted: true
            }))
          }
        }}
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
