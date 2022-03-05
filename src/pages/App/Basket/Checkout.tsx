import { ROUTES } from 'braty-common'
import { Box } from '@zapalniczki/shared-components'

import {
  Button,
  DisplayMoney,
  Flexbox,
  Heading,
  Separator,
  Text
} from 'components'
import { useBreakpoints, useTranslation } from 'hooks'
import {
  BasketItem,
  GetProductsByIdResponseItem,
  GetProductsResponseItem
} from 'models'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { calculateTotal, getLanguagePrice } from 'utils'

type Props = {
  products: GetProductsByIdResponseItem[]
}

const Checkout = ({ products }: Props) => {
  const { language } = useTranslation('COMMON')
  const commonT = useTranslation('COMMON').withBase('BASKET')
  const isMobile = useBreakpoints('mobile')

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { closeBasket } = useContext(togglesContext)
  const { basket, isBasketEmpty } = useContext(checkoutContext)

  const productTotals = basket.map((product) => {
    const total = getLanguagePrice({
      language,
      price: getProductTotal(products, product)
    })

    return total
  })
  const productsTotal = calculateTotal(productTotals)

  return (
    <Flexbox background="white" flexDirection="column">
      <Separator marginX="s-size" marginY="0" width="auto" />

      <Flexbox
        alignItems="center"
        justifyContent="space-between"
        padding="s-size"
        width="100%"
      >
        <Flexbox flexDirection="column">
          <Text type="caption">{commonT('total')}</Text>

          <Heading level={5}>
            <DisplayMoney>{productsTotal}</DisplayMoney>
          </Heading>
        </Flexbox>

        <Box>
          <Button
            disabled={isBasketEmpty || pathname === '/checkout'}
            label={commonT('checkout')}
            mobileFullWidth={false}
            onClick={() => {
              closeBasket()
              navigate(ROUTES.CART)
            }}
            size={isMobile ? 'small' : 'medium'}
          />
        </Box>
      </Flexbox>
    </Flexbox>
  )
}

const getProductTotal = (
  products: GetProductsResponseItem[],
  basketItem: BasketItem
) => {
  const price_pl =
    products.find((elem) => elem.id === basketItem.id)?.price_pl || 0

  const price_en =
    products.find((elem) => elem.id === basketItem.id)?.price_en || 0

  return {
    price_pl: price_pl * basketItem.quantity,
    price_en: price_en * basketItem.quantity
  }
}

export default Checkout
