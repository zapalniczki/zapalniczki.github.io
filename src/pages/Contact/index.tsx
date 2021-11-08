import { CallMeBack, ReadTermsAndConditions } from 'commonComponents'
import { Banner, Grid, Page } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import React from 'react'
import Tile from './Tile'
import useContactMethods from './useContactMethod'

const Contact = () => {
  const { t } = useTranslation('CONTACT')
  const contactMethods = useContactMethods()

  useTabTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <Grid gridTemplateColumns="repeat(3, 1fr)" marginTop="xxl-size">
        {contactMethods.map(({ icon, key, ...props }) => (
          <Tile
            icon={icon}
            key={key}
            title={icon ? t(`items.${key}.title`) : undefined}
            {...props}
          />
        ))}
      </Grid>

      <CallMeBack marginTop="xxl-size" />

      <ReadTermsAndConditions />
    </Page>
  )
}

export default Contact
