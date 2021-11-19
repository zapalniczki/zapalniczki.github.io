import { useScrollTop, usePageTitle } from 'hooks'
import React from 'react'
import { Carousel, Page } from 'components'

import { useTranslation } from 'hooks'
import Bestsellers from './Bestsellers'
import { CallMeBack, Newsletter } from 'commonComponents'
import Featured from './Featured'
import Christmas2021 from './Christmas2021'
import NewYearsEve2022 from './NewYearsEve2022'

const Home = () => {
  const { t } = useTranslation('HOME')

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Carousel>{['CHRISTMAS_2021', 'YOUR_PLACE']}</Carousel>

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
