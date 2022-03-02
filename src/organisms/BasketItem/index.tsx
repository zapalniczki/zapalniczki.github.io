import { ROUTES } from 'braty-common'
import { Box, DisplayMoney, Flexbox, Grid, Image, Link, Text } from 'components'
import { useBreakpoints, useTranslation } from 'hooks'
import { BasketItem, GetProductsResponseItem } from 'models'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext } from 'react'
import { generatePath } from 'react-router-dom'
import { useTheme } from 'styled-components'
import {
  findCorrectProductImageSize,
  getLanguageLabel,
  getLanguagePrice
} from 'utils'
import BasketItemLoader from './index.loader'
import SimpleButton from './SimpleButton'

type Props = {
  first?: boolean
  originalId: BasketItem['id']
  product?: GetProductsResponseItem
  quantity: number
}

const BasketItem = ({ originalId, product, quantity }: Props) => {
  const { language, t: commonT } = useTranslation('COMMON')
  const { space } = useTheme()
  const isMobile = useBreakpoints('mobile')

  const { closeBasket } = useContext(togglesContext)
  const { setCheckout } = useContext(checkoutContext)

  if (!product || !product.visible) {
    setCheckout((prev) => ({
      ...prev,
      basket: prev.basket.filter((p) => p.id !== originalId)
    }))

    return null
  }

  const productName = getLanguageLabel({
    language,
    label: product,
    name: true
  })

  const { id, images, price_en, price_pl } = product
  const price = getLanguagePrice({
    language,
    price: product
  })

  const productPath = generatePath(ROUTES.PRODUCTS_ID, { id })

  const modifyQuantity = (addition?: boolean) => {
    setCheckout((prev) => {
      let basket = prev.basket

      if (addition === undefined) {
        basket = basket.filter((basketItem) => basketItem.id !== id)
      } else {
        const newQuantity = quantity + (addition ? 1 : -1)

        const basketIndex = basket.findIndex(
          (basketItem) => basketItem.id === id
        )

        const newBasket = [...basket]

        newBasket[basketIndex] = {
          id,
          quantity: newQuantity,
          price_en,
          price_pl
        }

        basket = newBasket
      }

      return {
        ...prev,
        basket
      }
    })
  }

  const basketImage = findCorrectProductImageSize(images, 'BASKET')

  const imageColumnWidth = `calc(9rem + 2 * ${isMobile ? 0 : space['l-size']})`

  return (
    <Grid
      border="1px solid"
      borderColor="gray-medium"
      borderRadius="medium"
      gridGap="0"
      gridTemplateColumns={['unset', '1fr', `${imageColumnWidth} 1fr`]}
      gridTemplateRows={['unset', `${imageColumnWidth} 1fr`, '1fr']}
      height="max-content"
      minHeight="12rem"
      width="100%"
    >
      <Flexbox
        alignItems="center"
        borderBottomLeftRadius="inherit"
        borderTopLeftRadius="inherit"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Box height="9rem" position="relative" width="9rem">
          <Image alt={productName} size="BASKET" src={basketImage} />
        </Box>
      </Flexbox>

      <Grid
        alignItems="center"
        backgroundColor="gray-light"
        borderBottomRightRadius="inherit"
        borderTopRightRadius="inherit"
        gridGap="xxs-size"
        gridTemplateAreas={`'name price'
      'controls price'`}
        gridTemplateColumns="3fr 1fr"
        height="100%"
        paddingBottom={['unset', 's-size', 'm-size']}
        paddingTop={['unset', 's-size', 'l-size']}
        paddingX={['unset', 's-size', 'l-size']}
        width="100%"
      >
        <Flexbox flexDirection="column" gridArea="name" overflowX="hidden">
          <Link label={productName} onClick={closeBasket} to={productPath} />
        </Flexbox>

        <Flexbox alignItems="center" gridArea="controls">
          <SimpleButton
            disabled={quantity === 1}
            icon="minus"
            onClick={() => modifyQuantity(false)}
          />

          <Text marginX="s-size" type="subtitle-1">
            {quantity}
          </Text>

          <SimpleButton
            disabled={quantity === 100}
            icon="plus"
            onClick={() => modifyQuantity(true)}
          />

          <SimpleButton
            icon="trash-alt"
            marginLeft="s-size"
            onClick={() => modifyQuantity(undefined)}
          />
        </Flexbox>

        <Flexbox alignItems="flex-end" flexDirection="column" gridArea="price">
          <Text fontWeight="bold" type="subtitle-1">
            <DisplayMoney>{quantity * price}</DisplayMoney>
          </Text>

          {quantity > 1 && (
            <Text type="caption">
              {/* eslint-disable-next-line react/jsx-newline */}
              <DisplayMoney>{price}</DisplayMoney> {commonT('BASKET.each')}
            </Text>
          )}
        </Flexbox>
      </Grid>
    </Grid>
  )
}

export { BasketItemLoader }
export default BasketItem
