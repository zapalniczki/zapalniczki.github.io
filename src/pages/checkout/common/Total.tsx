import { Flexbox, Text } from 'components'
import { calculateDiscount, displayMoney, getVatAmount } from 'utils'
import React, { useContext } from 'react'
import { useTranslation } from 'hooks'
import { checkoutContext } from 'providers'
import add from 'lodash.add'
import subtract from 'lodash.subtract'
import multiply from 'lodash.multiply'
import { sumArray } from '../CheckoutPayment/useForm'

type Props = {
  customDelivery?: number
  customProducts?: number
}

const Total = ({ customDelivery, customProducts }: Props) => {
  const { t } = useTranslation('COMMON')

  const { checkout, voucher } = useContext(checkoutContext)
  const { basket, total } = checkout

  const products =
    customProducts ||
    sumArray(basket.map((product) => multiply(product.quantity, product.price)))

  const delivery = customDelivery || total.delivery || 0

  const cost = add(products, delivery)

  let discount = 0
  if (voucher) {
    discount = calculateDiscount(voucher.discount, voucher.is_fixed, cost)
  }

  const grandTotal = subtract(cost, discount)

  const vat = getVatAmount(grandTotal)

  return (
    <Flexbox alignItems="center" justifyContent="flex-end" marginTop="2rem">
      <table>
        <tbody>
          <tr>
            <td>
              <Text type="caption">{t('checkoutTotal.products')}</Text>
            </td>

            <td>
              <Text marginLeft="auto" textAlign="right" type="body-2">
                {displayMoney(products)}
              </Text>
            </td>
          </tr>

          {delivery ? (
            <tr>
              <td>
                <Text type="caption">{t('checkoutTotal.delivery')}</Text>
              </td>

              <td>
                <Text marginLeft="auto" textAlign="right" type="body-2">
                  {displayMoney(delivery)}
                </Text>
              </td>
            </tr>
          ) : null}

          {discount ? (
            <tr>
              <td>
                <Text type="caption">{t('checkoutTotal.discount')}</Text>
              </td>

              <td>
                <Text marginLeft="auto" textAlign="right" type="body-2">
                  {displayMoney(discount, true)}
                </Text>
              </td>
            </tr>
          ) : null}

          <tr>
            <td>
              <Text type="caption">{t('checkoutTotal.sum')}</Text>
            </td>

            <td>
              <Text
                fontWeight="bold"
                marginLeft="m-size"
                textAlign="right"
                type="body-1"
              >
                {displayMoney(grandTotal)}
              </Text>
            </td>
          </tr>

          <tr>
            <td>
              <Text type="caption">{t('checkoutTotal.vat')}</Text>
            </td>

            <td>
              <Text marginLeft="auto" textAlign="right" type="body-2">
                {displayMoney(vat)}
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    </Flexbox>
  )
}

export default Total
