import { Banner, Box, ExternalLink, Flexbox, ListItem, Page } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import React from 'react'

const Documents = () => {
  const { t } = useTranslation('DOCUMENTS')

  useScrollTop()
  useTabTitle(t('title'))

  return (
    <Page>
      <Banner size="SMALL" title={t('title')} />

      <Flexbox alignItems="flex-start" flexDirection="column">
        <ListItem marginTop="xl-size">{t('TYPES.termsAndConditions')}</ListItem>

        <ExternalLink
          marginLeft="l-size"
          marginTop="m-size"
          to="https://docs.google.com/document/d/1PfnUmbE0uZpxnne0Sz6eHPhT9Risc_YtnbygORBi5DA/edit?usp=sharing"
        >
          Aktualna wersja
        </ExternalLink>

        <ListItem marginTop="xl-size">{t('TYPES.newsletter')}</ListItem>

        <Box marginTop="l-size" position="relative">
          <ExternalLink marginLeft="l-size" to="">
            Aktualna wersja
          </ExternalLink>
        </Box>

        <ListItem marginTop="xl-size">{t('TYPES.privacyPolicy')}</ListItem>

        <Box marginTop="l-size" position="relative">
          <ExternalLink marginLeft="l-size" to="">
            Aktualna wersja
          </ExternalLink>
        </Box>

        <ListItem marginTop="xl-size">{t('TYPES.cookiesPolicy')}</ListItem>

        <Box marginTop="l-size" position="relative">
          <ExternalLink marginLeft="l-size" to="">
            Aktualna wersja
          </ExternalLink>
        </Box>
      </Flexbox>
    </Page>
  )
}

export default Documents
