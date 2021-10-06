import { Box, Flexbox } from 'components'
import { displayMoney } from 'utils'
import React, { useContext } from 'react'
import { useTranslation } from 'hooks'
import { checkoutContext } from 'providers/CheckoutProvider'
import add from 'lodash.add'

type Props = {
  customProducts?: number
  customDelivery?: number
}

const Total = ({ customProducts, customDelivery }: Props) => {
  const { t } = useTranslation('COMMON')

  const { checkout } = useContext(checkoutContext)
  const { totalNew } = checkout

  const products = customProducts || totalNew
  const delivery = customDelivery || 0
  const sum = add(products, delivery)

  return (
    <Flexbox alignItems="center" justifyContent="flex-end" marginTop="2rem">
      <table>
        <tbody>
          <tr>
            <td>
              <span>{t('checkoutTotal.products')}</span>
            </td>
            <td>
              <Box as="h4" margin="0" marginLeft="m-size">
                {displayMoney(products)}
              </Box>
            </td>
          </tr>

          <tr>
            <td>
              <span>{t('checkoutTotal.delivery')}</span>
            </td>
            <td>
              <Box as="h4" margin="0" marginLeft="m-size">
                {displayMoney(delivery)}
              </Box>
            </td>
          </tr>

          <tr>
            <td>
              <span>{t('checkoutTotal.sum')}</span>
            </td>
            <td>
              <Box as="h3" margin="0" marginLeft="m-size">
                {displayMoney(sum)}
              </Box>
            </td>
          </tr>
        </tbody>
      </table>
    </Flexbox>
  )
}

export default Total
