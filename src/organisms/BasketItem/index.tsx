import { ROUTES } from 'braty-common'
import { Box, Flexbox, Image, Link, Text, Tile } from 'components'
import { useTranslation } from 'hooks'
import { BasketItem, GetProductsResponseItem } from 'models'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext } from 'react'
import { generatePath } from 'react-router-dom'
import styled from 'styled-components'
import breakpoints from 'styles/breakpoints'
import getSpace from 'styles/getSpace'
import {
  displayMoney,
  findCorrectProductImageSize,
  getLanguageLabel
} from 'utils'
import BasketItemLoader from './index.loader'
import SimpleButton from './SimpleButton'

type Props = {
  first?: boolean
  originalId: BasketItem['id']
  product?: GetProductsResponseItem
  quantity: number
}

const BasketItem = ({ first, originalId, product, quantity }: Props) => {
  const { currentLanguage, t: commonT } = useTranslation('COMMON')

  const { closeBasket } = useContext(togglesContext)
  const { setCheckout } = useContext(checkoutContext)

  if (!product) {
    setCheckout((prev) => ({
      ...prev,
      basket: prev.basket.filter((p) => p.id !== originalId)
    }))

    return null
  }

  const productName = getLanguageLabel({
    language: currentLanguage,
    label: product,
    name: true
  })

  const { id, images, price } = product

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
          price
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

  return (
    <Container first={first}>
      <Box
        border="1px solid"
        borderColor="border-color"
        gridArea="picture"
        height={['unset', '3rem', '3rem', '9rem']}
        position="relative"
        width={['unset', '3rem', '3rem', '9rem']}
      >
        <ImageStyled alt={productName} size="BASKET" src={basketImage} />
      </Box>

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

      <Flexbox
        alignItems="flex-end"
        flexDirection="column"
        gridArea="button-remove"
      >
        <Text fontWeight="bold" type="subtitle-1">
          {displayMoney(quantity * price)}
        </Text>

        {quantity > 1 && (
          <Text type="caption">
            {/* eslint-disable-next-line react/jsx-newline */}
            {displayMoney(price)} {commonT('BASKET.each')}
          </Text>
        )}
      </Flexbox>
    </Container>
  )
}

type ContainerProps = Pick<Props, 'first'>
const Container = styled(Tile)<ContainerProps>`
  padding: ${getSpace('s-size')};
  min-height: 12rem;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  /* @include bezier-transition(); */
  /* animation: slide-up 0.5s ease; */
  width: 100%;
  margin-top: ${(props) => !props.first && getSpace('m-size')(props)};
  display: grid;
  grid-template-columns: 3rem auto max-content;
  grid-template-rows: repeat(2, auto);
  grid-gap: 0.5rem;
  grid-template-areas:
    'picture name name'
    'controls controls button-remove';

  ${breakpoints('desktop max')`
      grid-gap: 0.5rem 2rem;
      grid-template-columns: 9rem auto max-content;
      grid-template-areas:
        'picture name button-remove'
        'picture controls button-remove';
      grid-template-rows: repeat(2, 4.6rem);


    `}
`

const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
`

export { BasketItemLoader }
export default BasketItem
