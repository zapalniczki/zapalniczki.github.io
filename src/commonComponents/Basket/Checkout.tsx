import {
  Button,
  Flexbox,
  Heading,
  QueryLoader,
  Separator,
  Text
} from 'components'

import { displayMoney, calculateTotal } from 'utils'
import { basketContext } from 'providers'
import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { basketToggleContext } from 'providers'
import { BasketItem, GetProductsResponseItem } from 'models'
import { CHECKOUT_PRODUCTS, PRODUCTS } from 'constants/routes'
import { useGetProducts } from 'api'
import { checkoutContext } from 'providers'
import { useTranslation } from 'hooks'

const Checkout = () => {
  const { t } = useTranslation('COMMON')
  const { pathname } = useLocation()
  const history = useHistory()

  const { basket, basketLength } = useContext(basketContext)
  const { closeBasket } = useContext(basketToggleContext)
  const { setCheckout } = useContext(checkoutContext)

  const productsQuery = useGetProducts()

  return (
    <QueryLoader query={productsQuery}>
      {(products) => {
        const productsTotal = calculateTotal(
          basket.map((product) => getProductTotal(products, product))
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
                disabled={!basketLength || pathname === '/checkout'}
                label={t('basket.checkout')}
                marginLeft="m-size"
                onClick={() => {
                  setCheckout((prev) => ({
                    ...prev,

                    total: {
                      ...prev.total,
                      products: basket.map((e) => ({
                        id: e.id,
                        total: getProductTotal(products, e)
                      }))
                    },
                    products: basket
                  }))

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
