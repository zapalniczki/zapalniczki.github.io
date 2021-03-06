import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ROUTES } from 'braty-common'
import { DisplayMoney, Image, Text, Tile } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { useTranslation } from 'hooks'
import { GetProductsResponseItem } from 'models'
import { checkoutContext } from 'providers'
import React, { useContext, useState } from 'react'
import { generatePath, Link } from 'react-router-dom'
import ReactVisibilitySensor from 'react-visibility-sensor'
import styled from 'styled-components'
import { getColor, getRadius, getShadow } from 'styles'
import {
  findCorrectProductImageSize,
  getLanguageLabel,
  getLanguagePrice
} from 'utils'

export type Props = {
  product: GetProductsResponseItem
}

const ProductTile = ({ product }: Props) => {
  const { language } = useTranslation('COMMON')
  const viewProductPath = generatePath(ROUTES.PRODUCTS_ID, { id: product.id })

  const { getProductFromBasket } = useContext(checkoutContext)
  const isBasket = getProductFromBasket(product.id)
  const isInBasket = getProductFromBasket(product.id)

  const tileImage = findCorrectProductImageSize(product.images, 'TILE')
  const backImage = findCorrectProductImageSize(product.images, 'TILE_REVERSE')

  const [isHovered, setIsHovered] = useState(false)

  const { t: commonT } = useTranslation('COMMON')

  const productName = getLanguageLabel({
    language,
    label: product,
    name: true
  })

  const price = getLanguagePrice({
    language,
    price: product
  })

  return (
    <ReactVisibilitySensor partialVisibility scrollCheck>
      {({ isVisible }) => (
        <Container as={Link} max-height="30rem" to={viewProductPath}>
          <ImageWrapper>
            {isVisible && (
              <>
                {!isHovered && (
                  <Image
                    onPointerEnter={() => setIsHovered(true)}
                    size="TILE"
                    src={tileImage}
                  />
                )}

                {isHovered && (
                  <Image
                    onPointerLeave={() => setIsHovered(false)}
                    size="TILE"
                    src={backImage}
                  />
                )}
              </>
            )}
          </ImageWrapper>

          <Flexbox
            backgroundColor="gray-light"
            borderBottomLeftRadius="inherit"
            borderBottomRightRadius="inherit"
            justifyContent="space-between"
            overflow="hidden"
            paddingX={['unset', 'xs-size', 'xs-size', 'm-size']}
            paddingY="m-size"
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
                {productName}
              </Text>

              <Flexbox justifyContent="space-between" width="100%">
                <Text type="body-2">
                  {/* eslint-disable-next-line react/jsx-newline */}
                  <DisplayMoney>{price}</DisplayMoney> {commonT('unit')}
                </Text>

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
      )}
    </ReactVisibilitySensor>
  )
}

const Container = styled(Tile)`
  color: unset;
  cursor: pointer;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border: 1px solid;
  border-color: ${getColor('gray-medium')};
  border-radius: ${getRadius('medium')};
  padding: 0;

  &:hover {
    box-shadow: ${getShadow('tile')};
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 20rem;
  background: ${getColor('white')};
  position: relative;
  overflow: hidden;
  border-radius-top-left: inherit;
  border-radius-top-right: inherit;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export default ProductTile
