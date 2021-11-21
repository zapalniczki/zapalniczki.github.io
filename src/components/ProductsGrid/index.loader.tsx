import { Box, ContentLoader, Flexbox, Grid } from 'components'
import React from 'react'
import { SpaceProps } from 'styled-system'
import ProductTileLoader from './ProductTIle.loader'

type Props = SpaceProps & {
  count?: number
  title?: boolean
}

const ProductsGridLoader = ({ count = 3, title, ...props }: Props) => (
  <Flexbox flexDirection="column" {...props}>
    {title && (
      <Box marginBottom="m-size">
        <ContentLoader
          gradientRatio={1}
          height={30}
          viewBox="0 0 117 30"
          width={117}
        >
          <rect height="30" width="117" />
        </ContentLoader>
      </Box>
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
