import { Banner, Page } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import React from 'react'
import Products from './Products'

const CompanyOffer = () => {
  const { t } = useTranslation('VALENTINES_2022')

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner size="SMALL" title={t('title')} />

      <Products
        collectionId="c8445406-9971-424e-a788-df15dd6f0460"
        title="alfa"
      />

      <Products
        collectionId="c8445406-9971-424e-a788-df15dd6f0460"
        title="alfa"
      />

      <Products
        collectionId="c8445406-9971-424e-a788-df15dd6f0460"
        title="alfa"
      />
    </Page>
  )
}

export default CompanyOffer
