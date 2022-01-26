import { Banner, Heading, Page } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import React from 'react'
import Germany from './Germany'
import UnitedKingdom from './UnitedKingdom'

const Europe = () => {
  const { t } = useTranslation('EUROPE')

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner size="SMALL">
        <Heading level={3}>{t('title')}</Heading>
      </Banner>

      <Germany />

      <UnitedKingdom />
    </Page>
  )
}

export default Europe
