import {
  Features,
  ReadPrivacyPolicy,
  ReadTermsAndConditions
} from 'commonComponents'
import { Banner, Page } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import React from 'react'

const HowToCreateOrder = () => {
  const { t } = useTranslation('HOW_TO_CREATE_ORDER')

  useScrollTop()
  usePageTitle(t('title'))

  return (
    <Page>
      <Banner size="SMALL" title={t('title')} />

      <Features />

      <ReadTermsAndConditions />

      <ReadPrivacyPolicy />
    </Page>
  )
}

export default HowToCreateOrder
