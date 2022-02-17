import { ContentLoader } from 'components'
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
    <ContentLoader
      height={height}
      marginTop={first ? 'unset' : 'm-size'}
      width={width}
    />
  )
}

export default BasketItem
