import { ExternalLink, Banner, Heading, Page, Box, Flexbox } from 'components'
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
