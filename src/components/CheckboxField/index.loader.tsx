import { ContentLoader } from 'components'
import { useLoaderWidth } from 'hooks'
import React from 'react'
import { SpaceProps } from 'styled-system'

type Props = SpaceProps

const Loader = ({ ...props }: Props) => {
  const width = useLoaderWidth('MAIN')
  const height = 56

  return <ContentLoader height={height} width={width} {...props} />
}

export default Loader
