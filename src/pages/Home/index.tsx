import { CallMeBack } from 'commonComponents'
import { Carousel, Page } from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import React from 'react'
import Bestsellers from './Bestsellers'
import Catalogue from './Catalogue'
import Christmas2021 from './Christmas2021'
import Featured from './Featured'
import NewYearsEve2022 from './NewYearsEve2022'
import ValentinesDay from './ValentinesDay'
import { Box, Button } from '@zapalniczki/shared-components'
const Home = () => {
  const { t } = useTranslation('HOME')

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Carousel />

      <ValentinesDay />

      <Box>
        <Button label="fdf" />
      </Box>

      <Christmas2021 />

      <NewYearsEve2022 />

      <Featured />

      <Catalogue />

      <Bestsellers />

      <CallMeBack />
    </Page>
  )
}

export default Home
