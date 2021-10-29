import { Banner, Heading, Page } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import React from 'react'
import List from './List'

const AdminNewsletterUsers = () => {
  const { t } = useTranslation('ADMIN_NEWSLETTER_USERS')

  useScrollTop()
  useTabTitle(t('title'))

  return (
    <Page>
      <Banner
        horizonal
        marginBottom="xxl-size"
        small
        title={<Heading level={4}>{t('title')}</Heading>}
      />

      <List />
    </Page>
  )
}

export default AdminNewsletterUsers
