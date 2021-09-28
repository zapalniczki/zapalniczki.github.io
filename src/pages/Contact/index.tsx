import { CallMeBack, ReadTermsAndConditions } from 'commonComponents'
import { Page, Banner, Grid, Heading } from 'components'
import { useScrollTop, useTabTitle } from 'hooks'

import React from 'react'
import { useTranslation } from 'hooks'

import Tile from './Tile'
import useContactMethods from './useContactMethod'

const Contact = () => {
  const { t } = useTranslation('CONTACT')
  const contactMethods = useContactMethods()

  useTabTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner
        horizonal
        small
        title={<Heading level={4}>{t('title')}</Heading>}
      />

      <Grid gridTemplateColumns="repeat(3, 1fr)" marginTop="xxl-size">
        {contactMethods.map(({ key, ...props }) => (
          <Tile key={key} title={t(`items.${key}.title`)} {...props} />
        ))}
      </Grid>

      <CallMeBack marginTop="xxl-size" />

      <ReadTermsAndConditions />
    </Page>
  )
}

export default Contact
