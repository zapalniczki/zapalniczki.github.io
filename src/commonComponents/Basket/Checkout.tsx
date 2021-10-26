import {
  Button,
  Flexbox,
  Heading,
  QueryLoader,
  Separator,
  Text
} from 'components'

import { displayMoney, calculateTotal } from 'utils'
import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { basketToggleContext } from 'providers'
import { BasketItem, GetProductsResponseItem } from 'models'
import { CHECKOUT_PRODUCTS, PRODUCTS } from 'constants/routes'
import { getProducts } from 'api'
import { checkoutContext } from 'providers'
import { useTranslation } from 'hooks'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useQuery } from 'react-query'

const Checkout = () => {
  const { t } = useTranslation('COMMON')
  const { pathname } = useLocation()
  const history = useHistory()

  const { closeBasket } = useContext(basketToggleContext)
  const { checkout } = useContext(checkoutContext)

  const productsQuery = useQuery(PRODUCTS_TABLE, getProducts)

  return (
    <QueryLoader query={productsQuery}>
      {(products) => {
        const productsTotal = calculateTotal(
          checkout.basket.map((product) => getProductTotal(products, product))
        )

        return (
          <Flexbox background="white" flexDirection="column">
            <Separator marginX="s-size" marginY="0" width="auto" />

            <Flexbox alignItems="center" padding="m-size" width="100%">
              <Flexbox flexDirection="column">
                <Text type="caption">{t('basket.total')}</Text>

                <Heading level={5}>{displayMoney(productsTotal)}</Heading>
              </Flexbox>

              <Button
                label={t('basket.backToShop')}
                marginLeft="auto"
                onClick={() => {
                  closeBasket()
                  history.push(PRODUCTS)
                }}
                size="medium"
                variant="secondary"
              />

              <Button
                disabled={!checkout.basket.length || pathname === '/checkout'}
                label={t('basket.checkout')}
                marginLeft="m-size"
                onClick={() => {
                  closeBasket()
                  history.push(CHECKOUT_PRODUCTS)
                }}
                size="medium"
              />
            </Flexbox>
          </Flexbox>
        )
      }}
    </QueryLoader>
  )
}

export const getProductTotal = (
  products: GetProductsResponseItem[],
  basketItem: BasketItem
) => {
  const price = products.find((elem) => elem.id === basketItem.id)?.price || 0

  return price * basketItem.quantity
}

export default Checkout
