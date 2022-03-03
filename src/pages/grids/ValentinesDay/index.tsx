import { Banner, Page } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { Products } from 'organisms'
import React from 'react'

const ValentinesDay = () => {
  const { t } = useTranslation('VALENTINES_2022')

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner size="SMALL" title={t('title')} />

      <Products collectionKey="VALENTINES_DAY" />
    </Page>
  )
}

export default ValentinesDay
