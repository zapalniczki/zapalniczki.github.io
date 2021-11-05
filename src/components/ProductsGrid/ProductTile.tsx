import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Image, Text, Tile } from 'components'
import { VIEW_PRODUCT } from 'constants/routes'
import { GetProductsResponseItem } from 'models'
import { checkoutContext } from 'providers'
import React, { useContext, useState } from 'react'
import { generatePath, Link } from 'react-router-dom'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import { displayMoney, findCorrectProductImageSize } from 'utils'

export type Props = {
  product: GetProductsResponseItem
}

const ProductTile = ({ product }: Props) => {
  const viewProductPath = generatePath(VIEW_PRODUCT, { id: product.id })

  const { getProductFromBasket } = useContext(checkoutContext)
  const isBasket = getProductFromBasket(product.id)
  const isInBasket = getProductFromBasket(product.id)

  const tileImage = findCorrectProductImageSize(product.images, 'TILE')
  const backImage = findCorrectProductImageSize(product.images, 'TILE_REVERSE')

  const [alfa, setAlfa] = useState(false)

  return (
    <Container as={Link} max-height="30rem" to={viewProductPath}>
      <ImageWrapper>
        {!alfa && (
          <Image
            onPointerEnter={() => setAlfa(true)}
            size="TILE"
            src={tileImage}
          />
        )}

        {alfa && (
          <Image
            onPointerLeave={() => setAlfa(false)}
            size="TILE"
            src={backImage}
          />
        )}
      </ImageWrapper>

      <Flexbox
        backgroundColor="background-color"
        justifyContent="space-between"
        overflow="hidden"
        padding="m-size"
        width="100%"
      >
        <Flexbox flexDirection="column" maxWidth="100%" width="100%">
          <Text
            fontWeight="bold"
            maxWidth="100%"
            type="subtitle-1"
            width="100%"
            wrap={false}
          >
            {product.name}
          </Text>

          <Flexbox justifyContent="space-between" width="100%">
            <Text type="body-2">{displayMoney(product.price)}</Text>

            {isInBasket && (
              <Flexbox alignItems="center">
                <FontAwesomeIcon icon="shopping-basket" size="1x" />

                <Text marginLeft="xxs-size" type="body-2">
                  {isBasket?.quantity}
                </Text>
              </Flexbox>
            )}
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Container>
  )
}

const Container = styled(Tile)`
  color: unset;
  cursor: pointer;
  justify-content: space-between;
  text-decoration: none;
  border: 1px solid;
  border-color: ${getColor('border-color')};
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 20rem;
  background: ${getColor('white')};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export default ProductTile
