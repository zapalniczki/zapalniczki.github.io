import React, { Fragment } from 'react'

import { Carousel as CarouselLib } from 'react-responsive-carousel'
import { Box } from 'components'
import useBanners, { BannerKey } from './useBanners'
import Chevron from './Chevron'

const Carousel = () => {
  const { getBanner, visibleBanners } = useBanners()
  const multipleChildren = visibleBanners.length > 1

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
        {visibleBanners.map((banner, index) => (
          <Fragment key={index}>{getBanner(banner)}</Fragment>
        ))}
      </CarouselLib>
    </Box>
  )
}

export default Carousel
export { useBanners, BannerKey }
