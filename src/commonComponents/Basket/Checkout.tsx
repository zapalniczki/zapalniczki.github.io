import { getProductsById } from 'api'
import {
  Button,
  Flexbox,
  Heading,
  QueryLoader,
  Separator,
  Text
} from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { CHECKOUT_PRODUCTS, PRODUCTS } from 'constants/routes'
import { useBreakpoints, useTranslation } from 'hooks'
import { BasketItem, GetProductsResponseItem } from 'models'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useHistory, useLocation } from 'react-router-dom'
import { calculateTotal, displayMoney } from 'utils'

const Checkout = () => {
  const commonT = useTranslation('COMMON').withBase('BASKET')
  const isDesktop = useBreakpoints('desktop')

  const { pathname } = useLocation()
  const history = useHistory()

  const { closeBasket } = useContext(togglesContext)
  const { basket, isBasketEmpty } = useContext(checkoutContext)

  const ids = basket.map((e) => e.id)
  const productsQuery = useQuery([PRODUCTS_TABLE, ids], () =>
    getProductsById(ids)
  )

  return (
    <QueryLoader query={productsQuery}>
      {(products) => {
        const productsTotal = calculateTotal(
          basket.map((product) => getProductTotal(products, product))
        )

        return (
          <Flexbox background="white" flexDirection="column">
            <Separator marginX="s-size" marginY="0" width="auto" />

            <Flexbox alignItems="center" padding="s-size" width="100%">
              <Flexbox flexDirection="column">
                <Text type="caption">{commonT('total')}</Text>

                <Heading level={5}>{displayMoney(productsTotal)}</Heading>
              </Flexbox>

              <Flexbox
                flexDirection={['unset', 'column', 'column', 'row']}
                marginLeft="auto"
              >
                <Button
                  label={commonT('backToShop')}
                  onClick={() => {
                    closeBasket()
                    history.push(PRODUCTS)
                  }}
                  size={isDesktop ? 'medium' : 'small'}
                  variant="secondary"
                  width="100%"
                />

                <Button
                  disabled={isBasketEmpty || pathname === '/checkout'}
                  label={commonT('checkout')}
                  marginLeft={['unset', 'unset', 'unset', 'm-size']}
                  marginTop={['unset', 'xxxs-size', 'xxxs-size', 'unset']}
                  onClick={() => {
                    closeBasket()
                    history.push(CHECKOUT_PRODUCTS)
                  }}
                  size={isDesktop ? 'medium' : 'small'}
                  width="100%"
                />
              </Flexbox>
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
