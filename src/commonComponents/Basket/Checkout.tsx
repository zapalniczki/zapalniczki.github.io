import { Button, Flexbox, Heading, QueryLoader, Text } from 'components'

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
        const total = calculateTotal(
          basket.map((product) => getProductTotal(products, product))
        )

        return (
          <Flexbox
            alignItems="center"
            background="white"
            padding="m-size"
            width="100%"
          >
            <Flexbox flexDirection="column">
              <Text type="caption">{t('basket.total')}</Text>

              <Heading level={5}>{displayMoney(total)}</Heading>
            </Flexbox>

            <Button
              marginLeft="auto"
              onClick={() => {
                closeBasket()
                history.push(PRODUCTS)
              }}
              size="medium"
              variant="secondary"
            >
              {t('basket.backToShop')}
            </Button>

            <Button
              disabled={!basketLength || pathname === '/checkout'}
              marginLeft="m-size"
              onClick={() => {
                setCheckout((prev) => ({
                  ...prev,
                  total: total,
                  products: basket
                }))

                closeBasket()
                history.push(CHECKOUT_PRODUCTS)
              }}
              size="medium"
            >
              {t('basket.checkout')}
            </Button>
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
