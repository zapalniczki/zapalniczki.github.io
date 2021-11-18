import { ContentLoader, Flexbox } from 'components'
import { useLoaderWidth } from 'hooks'
import React from 'react'

const Loader = () => {
  const width = useLoaderWidth('SIDE')
  const height = 300

  return (
    <Flexbox height={height} width={width}>
      <ContentLoader
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        width={width}
      >
        <rect height={height} width={width} />
      </ContentLoader>
    </Flexbox>
  )
}

export default Loader
