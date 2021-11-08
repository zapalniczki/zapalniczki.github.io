import {
  Features,
  ReadPrivacyPolicy,
  ReadTermsAndConditions
} from 'commonComponents'
import { Banner, Page } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import React from 'react'

const HowToCreateOrder = () => {
  const { t } = useTranslation('HOW_TO_CREATE_ORDER')

  useScrollTop()
  useTabTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <Features />

      <ReadTermsAndConditions />

      <ReadPrivacyPolicy />
    </Page>
  )
}

export default HowToCreateOrder
