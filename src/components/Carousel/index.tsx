import React, { Fragment } from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel as CarouselLib } from 'react-responsive-carousel'
import { Box } from 'components'
import useBanners, { BannerKey } from './useBanners'
import Indicator from './Indicator'
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
        renderArrowNext={(clickHandler) => (
          <Chevron clickHandler={clickHandler} right />
        )}
        renderArrowPrev={(clickHandler) => (
          <Chevron clickHandler={clickHandler} />
        )}
        renderIndicator={(clickHandler, isSelected, index, label) => (
          <Indicator
            clickHandler={clickHandler}
            index={index}
            isSelected={isSelected}
            label={label}
          />
        )}
        showArrows={!!multipleChildren}
        showIndicators
        showStatus={false}
        showThumbs={false}
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
