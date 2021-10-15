import { Heading, Tile, ImageLoader, Flexbox } from 'components'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import getColor from 'styles/getColor'
import { GetProductsResponseItem } from 'api'

type Props = {
  product: GetProductsResponseItem
} & SpaceProps

const LongProductTile = ({ product, ...props }: Props) => {
  const imageUrl = product.image.long

  return (
    <Container as={Link} to={`/view_product/${product.id}`} {...props}>
      <Heading level={6} marginLeft="m-size">
        {product.name}
      </Heading>

      {imageUrl && (
        <Flexbox
          alignItems="center"
          height="100%"
          justifyContent="center"
          overflow="hidden"
          padding="auto 0"
          position="relative"
          width="60rem"
        >
          <ImageLoader src={imageUrl} />
        </Flexbox>
      )}
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
