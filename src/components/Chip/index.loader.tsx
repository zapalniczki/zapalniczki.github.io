import ContentLoader from '../ContentLoader'
import React from 'react'

type Props = {
  isFirst?: boolean
}

const Loader = ({ isFirst = false }: Props) => {
  const width = 85

  return (
    <ContentLoader
      gradientRatio={1}
      height={38}
      marginLeft={isFirst ? 0 : 'xs-size'}
      width={width}
    >
      <rect height={28} transform="translate(0, 5)" width={width} />
    </ContentLoader>
  )
}

export default Loader
