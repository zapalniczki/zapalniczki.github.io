import { ContentLoader, Flexbox, Grid } from 'components'
import React from 'react'
import { SpaceProps } from 'styled-system'
import ProductTileLoader from './ProductTIle.loader'

type Props = SpaceProps & {
  count?: number
  leftTitle?: boolean
  rightTitle?: boolean
}

const ProductsGridLoader = ({ count = 3, leftTitle, ...props }: Props) => (
  <Flexbox flexDirection="column" {...props}>
    {leftTitle && (
      <ContentLoader height={30} marginBottom="m-size" width={117} />
    )}

    <Grid
      gridTemplateColumns={['unset', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
    >
      {[...Array(count).keys()].map((n) => (
        <ProductTileLoader key={n} />
      ))}
    </Grid>
  </Flexbox>
)

export default ProductsGridLoader
