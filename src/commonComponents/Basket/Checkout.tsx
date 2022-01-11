import { ROUTES } from 'braty-common'
import { Box, Button, Flexbox, Heading, Separator, Text } from 'components'
import { useBreakpoints, useTranslation } from 'hooks'
import {
  BasketItem,
  GetProductsByIdResponseItem,
  GetProductsResponseItem
} from 'models'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { calculateTotal, displayMoney } from 'utils'

type Props = {
  products: GetProductsByIdResponseItem[]
}

const Checkout = ({ products }: Props) => {
  const commonT = useTranslation('COMMON').withBase('BASKET')
  const isDesktop = useBreakpoints('desktop')

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { closeBasket } = useContext(togglesContext)
  const { basket, isBasketEmpty } = useContext(checkoutContext)

  const productsTotal = calculateTotal(
    basket.map((product) => getProductTotal(products, product))
  )

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

          <Heading level={5}>{displayMoney(productsTotal)}</Heading>
        </Flexbox>

        <Box>
          <Button
            disabled={isBasketEmpty || pathname === '/checkout'}
            label={commonT('checkout')}
            onClick={() => {
              closeBasket()
              navigate(ROUTES.CART)
            }}
            size={isDesktop ? 'medium' : 'small'}
            width="100%"
          />
        </Box>
      </Flexbox>
    </Flexbox>
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
