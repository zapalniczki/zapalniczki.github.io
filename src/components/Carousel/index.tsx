import React, { Fragment } from 'react'

import { Carousel as CarouselLib } from 'react-responsive-carousel'
import { Box } from 'components'
import useBanners, { BannerKey } from './useBanners'
import Chevron from './Chevron'

type Props = {
  children: BannerKey[]
}

const Carousel = ({ children }: Props) => {
  const { getBanner } = useBanners()
  const multipleChildren = children.length > 1

  return (
    <Box height="100%" width="100%">
      <CarouselLib
        autoPlay
        dynamicHeight={false}
        infiniteLoop
        interval={7000}
        renderArrowNext={(clickHandler) => {
          if (!multipleChildren) {
            return null
          }

          return <Chevron clickHandler={clickHandler} right />
        }}
        renderArrowPrev={(clickHandler) => {
          if (!multipleChildren) {
            return null
          }

          return <Chevron clickHandler={clickHandler} />
        }}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        swipeable={false}
        useKeyboardArrows
      >
        {children.map((child, index) => (
          <Fragment key={index}>{getBanner(child)}</Fragment>
        ))}
      </CarouselLib>
    </Box>
  )
}

export default Carousel
export { useBanners, BannerKey }
