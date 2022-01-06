import { CallMeBack, Newsletter } from 'commonComponents'
import { BannerKey, Carousel, Page } from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import Bestsellers from './Bestsellers'
import Christmas2021 from './Christmas2021'
import Featured from './Featured'
import NewYearsEve2022 from './NewYearsEve2022'

const Home = () => {
  const { christmas2021 } = useContext(remoteConfigContext)
  const { t } = useTranslation('HOME')

  usePageTitle(t('title'))
  useScrollTop()

  let banners: BannerKey[] = ['YOUR_PLACE']
  if (christmas2021) {
    banners = ['CHRISTMAS_2021', ...banners]
  }

  return (
    <Page>
      <Carousel>{banners}</Carousel>

      <Christmas2021 />

      <NewYearsEve2022 />

      <Featured />

      <Newsletter />

      <Bestsellers />

      <CallMeBack />
    </Page>
  )
}

export default Home
