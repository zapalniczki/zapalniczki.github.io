import { ProductsGridLoader, ContentLoader, Flexbox } from 'components'
import React from 'react'

const Loader = () => (
  <Flexbox flexDirection="column">
    <ContentLoader height={40} viewBox="0 0 1200 40" width={1200}>
      <rect height="24" transform="translate(0,8)" width="80" />
      <rect height="40" transform="translate(950,0)" width="188" />
      <rect height="40" transform="translate(1154,0)" width="46" />
    </ContentLoader>

    <ProductsGridLoader count={6} marginTop="m-size" />
  </Flexbox>
)

export default Loader
