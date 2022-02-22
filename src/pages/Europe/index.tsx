import { Banner, Heading, Page } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { Products } from 'organisms'
import React from 'react'

const Europe = () => {
  const { t } = useTranslation('EUROPE')

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner size="SMALL">
        <Heading level={3}>{t('title')}</Heading>
      </Banner>

      <Products collectionKey="GERMANY" title={t('GERMANY.title')} />

      <Products
        collectionKey="UNITED_KINGDOM"
        title={t('UNITED_KINGDOM.title')}
      />
    </Page>
  )
}

export default Europe
