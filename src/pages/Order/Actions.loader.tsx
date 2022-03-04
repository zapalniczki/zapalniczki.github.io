import { ContentLoader } from 'components'
import { useLoaderWidth } from 'hooks'
import React from 'react'

const ActionsLoader = () => {
  const width = useLoaderWidth('SIDE')
  const height = 215

  return <ContentLoader height={height} width={width} />
}

export default ActionsLoader
