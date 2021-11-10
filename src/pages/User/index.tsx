import { Banner, Columns, Page } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { ContactDetails } from 'organisms'
import React from 'react'

const User = () => {
  const { t } = useTranslation('USER')

  useScrollTop()
  useTabTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <Columns>
        <div />

        <div>
          <ContactDetails userId="365574d5-af43-46ef-8371-329a5134b856" />
        </div>
      </Columns>
    </Page>
  )
}

export default User
