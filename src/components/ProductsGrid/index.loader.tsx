import { Grid } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { SectionTitleLoader } from '../SectionTitle'
import React from 'react'
import { SpaceProps } from 'styled-system'
import ProductTileLoader from './ProductTIle.loader'

type Props = SpaceProps & {
  count?: number
  link?: boolean
  showCount?: boolean
  title?: boolean
}

const ProductsGridLoader = ({
  count = 3,
  link,
  showCount,
  title,
  ...props
}: Props) => (
  <Flexbox flexDirection="column" {...props}>
    <SectionTitleLoader left={title} right={showCount || link} />

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
