import { BannerKey } from 'components/Carousel/useBanners'
import React, { ReactNode } from 'react'
import Banner, { BasicProps } from '../Banner'
import YourPlaceInYourPoint from './YourPlaceInYourPoint'

type Props = BasicProps & {
  bannerKey: BannerKey,
  children?: ReactNode
  img?: string
}

const BannerWithPicture = ({ bannerKey, children, ...props }: Props) => {
  let background: JSX.Element
  switch (bannerKey) {
    case 'YOUR_PLACE':
    default:
      background = <YourPlaceInYourPoint />
  }

  return (
    <Banner background={background} {...props}>
      {children}
    </Banner>
  )
}

export default BannerWithPicture
