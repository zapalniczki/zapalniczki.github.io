import React from 'react'
import { ContentLoader } from 'components'

const TileLoader = () => (
  <ContentLoader
    gradientRatio={1}
    width={380}
    height={300}
    viewBox="0 0 380 300"
  >
    <rect width="380" height="300" />
  </ContentLoader>
)

export default TileLoader
