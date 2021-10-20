import React from 'react'
import { ContentLoader } from 'components'

const TileLoader = () => (
  <ContentLoader
    gradientRatio={1}
    height={300}
    viewBox="0 0 380 300"
    width={380}
  >
    <rect height="300" width="380" />
  </ContentLoader>
)

export default TileLoader
