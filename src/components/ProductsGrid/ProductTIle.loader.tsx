import React from 'react'
import { ContentLoader } from 'components'
import { useBreakpoints } from 'hooks'

const ProductTileLoader = () => {
  const isTablet = useBreakpoints('tablet')
  const isDesktop = useBreakpoints('desktop')
  const isMax = useBreakpoints('max')

  let width
  if (isMax) {
    width = 380
  } else if (!isMax && isDesktop) {
    width = 964 / 3
  } else if (!isDesktop && isTablet) {
    width = 369
  } else {
    width = 320
  }

  const height = 300

  return (
    <ContentLoader
      gradientRatio={1}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      <rect height={height} width={width} />
    </ContentLoader>
  )
}

export default ProductTileLoader
