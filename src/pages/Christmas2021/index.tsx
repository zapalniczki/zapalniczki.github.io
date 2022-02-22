import { Banner, Heading, Page } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { Products } from 'organisms'
import React from 'react'

const Christmas2021 = () => {
  const { t } = useTranslation('CHRISTMAS_2021')

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner backgroundColor="christmas-red" size="SMALL">
        <Heading color="white" fontFamily="Caveat Brush" level={3}>
          {t('title')}
        </Heading>
      </Banner>

      <Products
        collectionKey="CHRISTMAS_2021"
        title={t('CHRISTMAS_PRODUCTS.title')}
      />

      <Banner backgroundColor="christmas-red" marginTop="xxl-size" size="SMALL">
        <Heading color="white" fontFamily="Caveat Brush" level={4}>
          {t('HALF_BANNER.title')}
        </Heading>

        <Heading color="white" level={6} marginTop="xs-size">
          {t('HALF_BANNER.info')}
        </Heading>
      </Banner>

      <Products
        collectionKey="NEW_YEARS_EVE_2022"
        title={t('NEW_YEAR_PRODUCTS.title')}
      />
    </Page>
  )
}

export default Christmas2021
