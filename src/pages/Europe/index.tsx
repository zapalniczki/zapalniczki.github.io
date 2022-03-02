import { Banner, Page } from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import { Products } from 'organisms'
import React from 'react'

const Europe = () => {
  const { t } = useTranslation('EUROPE')

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner size="SMALL" title={t('title')} />

      <Products collectionKey="GERMANY" title={t('GERMANY.title')} />

      <Products
        collectionKey="UNITED_KINGDOM"
        title={t('UNITED_KINGDOM.title')}
      />
    </Page>
  )
}

export default Europe
