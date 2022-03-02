import React, { Fragment } from 'react'

import { Carousel as CarouselNative } from 'react-responsive-carousel'
import { Box } from 'components'
import useHero, { BannerKey } from './useHero'
import Chevron from './Chevron'

const Carousel = () => {
  const { getBanner, visibleBanners } = useHero()
  const multipleChildren = visibleBanners.length > 1

  return (
    <Box height="100%" width="100%">
      <CarouselNative
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
      </CarouselNative>
    </Box>
  )
}

export default Carousel
export { useHero as useBanners, BannerKey }
