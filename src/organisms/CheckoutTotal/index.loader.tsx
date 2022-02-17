import { ContentLoader } from 'components'
import { useLoaderWidth } from 'hooks'
import React from 'react'

const Loader = () => {
  const width = useLoaderWidth('SIDE')
  const height = 300

  return <ContentLoader height={height} width={width} />
}

export default Loader
