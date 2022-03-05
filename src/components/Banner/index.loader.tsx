import { ContentLoader } from 'components'
import { useLoaderWidth } from 'hooks'
import React from 'react'
import { SpaceProps } from 'styled-system'

const BannerLoader = (props: SpaceProps) => {
  const width = useLoaderWidth()
  const height = 200

  return <ContentLoader height={height} width={width} {...props} />
}

export default BannerLoader
