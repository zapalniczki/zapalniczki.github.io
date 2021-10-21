import { Box, Flexbox, ImageLoader, Text, Tile } from 'components'
import React, { useContext } from 'react'
import { generatePath, Link } from 'react-router-dom'
import styled, { css, useTheme } from 'styled-components'
import { displayMoney, findCorrectProductImageSize } from 'utils'
import { VIEW_PRODUCT } from 'constants/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { basketContext } from 'providers'
import getColor from 'styles/getColor'
import { GetProductsResponseItem } from 'models'

export type Props = {
  product: GetProductsResponseItem
}

const ProductTile = ({ product }: Props) => {
  const viewProductPath = generatePath(VIEW_PRODUCT, { id: product.id })
  const { colors } = useTheme()

  const { getProductFromBasket } = useContext(basketContext)
  const isInBasket = !!getProductFromBasket(product.id)

  const tileImage = findCorrectProductImageSize(product.images, 'TILE')
  const backImage = findCorrectProductImageSize(product.images, 'TILE_REVERSE')

  return (
    <Container as={Link} max-height="30rem" to={viewProductPath}>
      <ImageWrapper>
        <ImageLoader alt="" src={tileImage} />
        <ImageLoader alt="" src={backImage} />
      </ImageWrapper>

      <Flexbox
        backgroundColor="background-color"
        justifyContent="space-between"
        padding="m-size"
        width="100%"
      >
        <Flexbox flexDirection="column">
          <Text fontWeight="bold" type="subtitle-1">
            {product.name}
          </Text>

          <Text type="body-2">{displayMoney(product.price)}</Text>
        </Flexbox>

        {isInBasket && (
          <Flexbox alignItems="center" justifyContent="center">
            <FontAwesomeIcon icon="shopping-basket" size="1x" />

            <Box marginLeft="xxs-size">
              <FontAwesomeIcon color={colors.green} icon="check" size="1x" />
            </Box>
          </Flexbox>
        )}
      </Flexbox>
    </Container>
  )
}

const imageHover = css`
  img,
  aside {
    display: none;

    &:first-child {
      display: block;
    }
  }

  &:hover {
    img,
    aside {
      display: block;

      &:first-child {
        display: none;
      }
    }
  }
`

const Container = styled(Tile)`
  color: unset;
  cursor: pointer;
  justify-content: space-between;
  text-decoration: none;
  border: 1px solid;
  border-color: ${getColor('border-color')};

  ${imageHover}
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
