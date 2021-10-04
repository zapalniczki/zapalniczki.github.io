import { Banner, Heading, Page } from 'components'
import { ExternalLink } from 'components'
import { useScrollTop, useTabTitle } from 'hooks'
import React from 'react'
import { useTranslation } from 'hooks'
import { ListItem } from 'components'

const Documents = () => {
  const { t } = useTranslation('DOCUMENTS')

  useScrollTop()
  useTabTitle(t('title'))

  return (
    <Page>
      <Banner
        horizonal
        small
        title={<Heading level={4}>{t('title')}</Heading>}
      />

      <ListItem marginTop="l-size">
        <ExternalLink to="https://docs.google.com/document/d/1PfnUmbE0uZpxnne0Sz6eHPhT9Risc_YtnbygORBi5DA/edit?usp=sharing">
          {t('TYPES.termsAndConditions')}
        </ExternalLink>
      </ListItem>

      <ListItem marginTop="l-size">
        <ExternalLink to="">{t('TYPES.privacyPolicy')}</ExternalLink>
      </ListItem>

      <ListItem marginTop="l-size">
        <ExternalLink to="">{t('TYPES.cookiesPolicy')}</ExternalLink>
      </ListItem>
    </Page>
  )
}

export default Documents
