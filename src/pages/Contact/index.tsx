import { CallMeBack, ReadTermsAndConditions } from 'commonComponents'
import { Banner, Grid, Page, Tile } from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import React from 'react'
import useContactMethod from './useContactMethod'

const Contact = () => {
  const { t } = useTranslation('CONTACT')
  const contactMethods = useContactMethod()

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Banner size="SMALL" title={t('title')} />

      <Grid
        gridTemplateColumns={[
          'unset',
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(3, 1fr)'
        ]}
        marginTop="xxl-size"
      >
        {contactMethods.map(({ content, extended, key, ...props }) => (
          <Tile
            gridColumn={[
              'unset',
              '1fr',
              '1fr',
              extended ? 'auto / span 2' : 'auto'
            ]}
            key={key}
            padding={[0, 0, 0, 0]}
            {...props}
          >
            {content}
          </Tile>
        ))}
      </Grid>

      <CallMeBack marginTop="xxl-size" />

      <ReadTermsAndConditions />
    </Page>
  )
}

export default Contact
