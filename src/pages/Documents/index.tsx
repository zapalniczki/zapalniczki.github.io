import { Banner, Heading, Page } from 'components'
import { ExternalLink } from 'components'
import { useScrollTop, useTabTitle } from 'hooks'
import React from 'react'
import { useTranslation } from 'hooks'
import ListItem from 'components/ListItem'

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
        <ExternalLink to="https://drive.google.com/file/d/1csQd4cWoBWJh26xaFo-ZWasBoZPk-8FK/view?usp=sharing">
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
