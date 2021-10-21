import {
  Features,
  ReadPrivacyPolicy,
  ReadTermsAndConditions
} from 'commonComponents'
import { Banner, Heading, Page } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import React from 'react'

const HowToCreateOrder = () => {
  const { t } = useTranslation('HOW_TO_CREATE_ORDER')

  useScrollTop()
  useTabTitle(t('title'))

  return (
    <Page>
      <Banner
        horizonal
        small
        title={<Heading level={4}>{t('title')}</Heading>}
      />

      <Features />

      <ReadTermsAndConditions />

      <ReadPrivacyPolicy />
    </Page>
  )
}

export default HowToCreateOrder