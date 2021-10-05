import {
  QueryLoader,
  ImageLoader,
  Link,
  Box,
  Badge,
  Flexbox,
  Tile
} from 'components'

import React, { useContext } from 'react'

import styled from 'styled-components'

import { generatePath } from 'react-router-dom'

import { basketContext } from 'providers/BasketProvider'
import { displayMoney } from 'utils'
import { BasketItem as BasketItemType } from 'models'
import { VIEW_PRODUCT } from 'constants/routes'
import { basketToggleContext } from 'providers/BasketToggleProvider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SimpleButton from './SimpleButton'
import { useGetProduct } from 'api'
import add from 'lodash.add'
import { checkoutContext } from 'providers/CheckoutProvider'
import subtract from 'lodash.subtract'

type Props = {
  product: BasketItemType
}

const BasketItem = ({ product: basketProduct }: Props) => {
  const { setBasket } = useContext(basketContext)
  const { closeBasket } = useContext(basketToggleContext)
  const { setCheckout } = useContext(checkoutContext)

  const { id, quantity } = basketProduct

  const productQuery = useGetProduct({ id })

  const productPath = generatePath(VIEW_PRODUCT, { id })

  return (
    <Container>
      <QueryLoader query={productQuery}>
        {(product) => {
          const modifyQuantity = (addition?: boolean) => {
            setBasket((prev) => {
              if (addition === undefined) {
                const productInBasket = findBasketItem(
                  prev,
                  basketProduct
                ).product

                return prev.filter((elem) => elem !== productInBasket)
              }
              const index = findBasketItem(prev, basketProduct).index
              const result = [...prev]
              result[index].quantity = quantity + (addition ? 1 : -1)

              return result
            })

            setCheckout((checkoutPrev) => {
              const productTotal = product.price * basketProduct.quantity

              return {
                ...checkoutPrev,
                totalNew:
                  addition === undefined
                    ? subtract(checkoutPrev.totalNew, productTotal)
                    : addition
                    ? add(checkoutPrev.totalNew, product.price)
                    : subtract(checkoutPrev.totalNew, product.price)
              }
            })
          }

          return (
            <>
              <SimpleButton
                disabled={quantity === 1}
                gridArea="button-minus"
                onClick={() => modifyQuantity(false)}
              >
                <FontAwesomeIcon icon="minus" size="1x" />
              </SimpleButton>

              <SimpleButton
                gridArea="button-plus"
                onClick={() => modifyQuantity(true)}
              >
                <FontAwesomeIcon icon="plus" size="1x" />
              </SimpleButton>

              <Box
                border="1px solid"
                borderColor="border-color"
                gridArea="picture"
                height="9rem"
                position="relative"
                width="9rem"
              >
                <ImageLoader
                  alt={product.name}
                  src={product.mainImage.basket}
                />
              </Box>

              <Flexbox flexDirection="column" gridArea="name">
                <Link onClick={closeBasket} to={productPath}>
                  {product.name}
                </Link>
              </Flexbox>

              <Flexbox alignItems="center">
                <Box as="h4" margin="0" marginRight="m-size">
                  {displayMoney(product.price)}
                </Box>

                <Badge count={quantity} stanalone />
              </Flexbox>

              <SimpleButton
                gridArea="button-remove"
                onClick={() => modifyQuantity(undefined)}
              >
                <FontAwesomeIcon icon="times" size="1x" />
              </SimpleButton>
            </>
          )
        }}
      </QueryLoader>
    </Container>
  )
}

const findBasketItem = (basket: BasketItemType[], product: BasketItemType) => {
  const index = basket.findIndex((elem) => elem.id === product.id)

  return {
    product: basket[index],
    index
  }
}

const Container = styled(Tile)`
  padding: ${(props) => props.theme.space['s-size']};
  min-height: 11.6rem;
  display: flex;
  align-items: center;
  /* @include bezier-transition(); */
  /* animation: slide-up 0.5s ease; */
  width: 100%;
  margin-bottom: ${(props) => props.theme.space['m-size']};
  display: grid;
  grid-template-columns: max-content 9rem auto max-content;
  grid-template-rows: repeat(2, 4.6rem);
  grid-gap: 0.5rem 2rem;
  grid-template-areas:
    'button-plus picture name button-remove'
    'button-minus picture alba button-remove';
`

export default BasketItem
