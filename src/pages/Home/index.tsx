import { useScrollTop, useTabTitle } from 'hooks'
import React from 'react'
import { Carousel, Page } from 'components'

import { useTranslation } from 'hooks'
import Bestsellers from './Bestsellers'
import { Newsletter } from 'commonComponents'
import Featured from './Featured'

const Home = () => {
  const { t } = useTranslation('HOME')

  useTabTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Carousel>{['YOUR_PLACE']}</Carousel>

      <Featured />

      <Newsletter />

      <Bestsellers />
    </Page>
  )
}

export default Home
