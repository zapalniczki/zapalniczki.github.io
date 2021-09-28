import { Button, Flexbox, Heading, QueryLoader, Text } from 'components'

import { displayMoney, calculateTotal } from 'utils'
import { basketContext } from 'providers/BasketProvider'
import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { basketToggleContext } from 'providers/BasketToggleProvider'
import { BasketItem } from 'models/basketItem'
import { CHECKOUT_PRODUCTS, PRODUCTS } from 'constants/routes'
import { Product, useGetProducts } from 'api'
import { checkoutContext } from 'providers/CheckoutProvider'
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
            background="white"
            padding="m-size"
            alignItems="center"
            width="100%"
          >
            <Flexbox flexDirection="column">
              <Text type="caption">{t('basket.total')}</Text>
              <Heading level={5}>{displayMoney(total)}</Heading>
            </Flexbox>

            <Button
              size="medium"
              variant="secondary"
              marginLeft="auto"
              onClick={() => {
                closeBasket()
                history.push(PRODUCTS)
              }}
            >
              {t('basket.backToShop')}
            </Button>

            <Button
              size="medium"
              marginLeft="m-size"
              onClick={() => {
                setCheckout((prev) => ({
                  ...prev,
                  totalNew: total,
                  products2: basket
                }))

                closeBasket()
                history.push(CHECKOUT_PRODUCTS)
              }}
              disabled={!basketLength || pathname === '/checkout'}
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
  products: Product[],
  basketItem: BasketItem
) => {
  const price = products.find((elem) => elem.id === basketItem.id)?.price || 0

  return price * basketItem.quantity
}

export default Checkout
