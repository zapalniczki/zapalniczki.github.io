import { Banner, Page } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import React from 'react'
import Products from './Products'

const ValentinesDay = () => {
  const { t } = useTranslation('VALENTINES_2022')

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner size="SMALL" title={t('title')} />

      <Products />
    </Page>
  )
}

export default ValentinesDay
