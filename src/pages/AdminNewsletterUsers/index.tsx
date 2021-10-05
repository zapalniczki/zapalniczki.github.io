import { Banner, Heading, Page } from 'components'
import { useDocumentTitle, useScrollTop, useTranslation } from 'hooks'
import React from 'react'

const AdminNewsletterUsers = () => {
  const { t } = useTranslation('ADMIN_NEWSLETTER_USERS')

  useScrollTop()
  useDocumentTitle(t('title'))

  return (
    <Page>
      <Banner
        horizonal
        marginBottom="xxl-size"
        small
        title={<Heading level={4}>{t('title')}</Heading>}
      />
    </Page>
  )
}

export default AdminNewsletterUsers
