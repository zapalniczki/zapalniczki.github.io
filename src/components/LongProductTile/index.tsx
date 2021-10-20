import { Heading, Tile, ImageLoader, Flexbox } from 'components'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import getColor from 'styles/getColor'
import { GetFeaturedResponseItem } from 'models'
import { findCorrectProductImageSize } from 'utils'

export type Props = {
  product: GetFeaturedResponseItem
} & SpaceProps

const LongProductTile = ({ product, ...props }: Props) => {
  const longImage = findCorrectProductImageSize(product.images, 'LONG')

  return (
    <Container as={Link} to={`/view_product/${product.id}`} {...props}>
      <Heading level={6} marginLeft="m-size">
        {product.name}
      </Heading>

      <Flexbox
        alignItems="center"
        height="100%"
        justifyContent="center"
        overflow="hidden"
        padding="auto 0"
        position="relative"
        width="60rem"
      >
        <ImageLoader src={longImage} />
      </Flexbox>
    </Container>
  )
}

const Container = styled(Tile)`
  cursor: pointer;
  text-decoration: none;
  justify-content: space-between;
  color: unset;
  display: flex;
  align-items: center;
  height: 20rem;
  background-color: ${getColor('white')};
  border: 1px solid;
  border-color: ${getColor('border-color')};
`

export default LongProductTile
