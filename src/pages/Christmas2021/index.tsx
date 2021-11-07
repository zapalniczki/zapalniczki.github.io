import { Banner, Flexbox, Heading, Page } from 'components'
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
      <Banner
        backgroundColor="braty-red"
        horizonal
        small
        title={
          <Heading color="white" fontFamily="Caveat Brush" level={3}>
            {t('title')}
          </Heading>
        }
      />

      <ChristmasProducts />

      <Banner
        backgroundColor="braty-red"
        horizonal
        marginTop="xxl-size"
        small
        title={
          <Flexbox flexDirection="column">
            <Heading color="white" fontFamily="Caveat Brush" level={4}>
              {t('HALF_BANNER.title')}
            </Heading>

            <Heading color="white" level={6} marginTop="xs-size">
              {t('HALF_BANNER.info')}
            </Heading>
          </Flexbox>
        }
      />

      <NewYearProducts />
    </Page>
  )
}

export default Contact
