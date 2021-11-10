import { Banner, Columns, Page } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { ContactDetails } from 'organisms'
import React from 'react'
import Orders from './Orders'

const User = () => {
  const { t } = useTranslation('USER')

  useScrollTop()
  useTabTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <Columns>
        <div>
          <Orders />
        </div>

        <div>
          <ContactDetails userId="9014ee40-0227-4e27-8c47-fa3238217e12" />
        </div>
      </Columns>
    </Page>
  )
}

export default User
