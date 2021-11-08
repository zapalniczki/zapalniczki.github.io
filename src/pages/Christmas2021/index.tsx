import { Banner, Heading, Page } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import React from 'react'
import ChristmasProducts from './ChristmasProducts'
import NewYearProducts from './NewYearProducts'

const Contact = () => {
  const { t } = useTranslation('CHRISTMAS_2021')

  useTabTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner backgroundColor="christmas-red" size="SMALL">
        <Heading color="white" fontFamily="Caveat Brush" level={3}>
          {t('title')}
        </Heading>
      </Banner>

      <ChristmasProducts />

      <Banner backgroundColor="christmas-red" marginTop="xxl-size" size="SMALL">
        <Heading color="white" fontFamily="Caveat Brush" level={4}>
          {t('HALF_BANNER.title')}
        </Heading>

        <Heading color="white" level={6} marginTop="xs-size">
          {t('HALF_BANNER.info')}
        </Heading>
      </Banner>

      <NewYearProducts />
    </Page>
  )
}

export default Contact