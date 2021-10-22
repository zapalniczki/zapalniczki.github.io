import { Box, Flexbox, Text } from 'components'
import { displayMoney } from 'utils'
import React, { useContext } from 'react'
import { useTranslation } from 'hooks'
import { checkoutContext } from 'providers'
import add from 'lodash.add'

type Props = {
  customDelivery?: number
  customProducts?: number
}

const Total = ({ customDelivery, customProducts }: Props) => {
  const { t } = useTranslation('COMMON')

  const { checkout } = useContext(checkoutContext)
  const { total: totalNew } = checkout

  const products = customProducts || totalNew
  const delivery = customDelivery || 0
  const sum = add(products, delivery)

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

          <tr>
            <td>
              <Text type="caption">{t('checkoutTotal.sum')}</Text>
            </td>

            <td>
              <Text
                fontWeight="bold"
                marginLeft="auto"
                textAlign="right"
                type="body-1"
              >
                {displayMoney(sum)}
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    </Flexbox>
  )
}

export default Total
