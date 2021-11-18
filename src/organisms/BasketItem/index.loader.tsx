import { ContentLoader, Flexbox } from 'components'
import { useBreakpoints, useLoaderWidth } from 'hooks'
import React from 'react'

type Props = {
  first?: boolean
  inCart?: boolean
}

const BasketItem = ({ first, inCart }: Props) => {
  const isMobile = useBreakpoints('mobile')
  const height = 123

  let width = useLoaderWidth('MAIN')
  if (!inCart) {
    width = 576

    if (isMobile) {
      width = 296
    }
  }

  return (
    <Flexbox
      height={height}
      marginTop={first ? 'unset' : 'm-size'}
      width={width}
    >
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

export default BasketItem
