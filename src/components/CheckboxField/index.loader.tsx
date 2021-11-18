import { ContentLoader, Flexbox } from 'components'
import { useLoaderWidth } from 'hooks'
import React from 'react'
import { SpaceProps } from 'styled-system'

type Props = SpaceProps

const Loader = ({ ...props }: Props) => {
  const width = useLoaderWidth('MAIN')
  const height = 56

  return (
    <Flexbox flexDirection="column" height={height} width={width} {...props}>
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
