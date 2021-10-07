import { Banner, Heading, Page } from 'components'
import { useDocumentTitle, useScrollTop, useTranslation } from 'hooks'
import React from 'react'
import List from './List2'

const AdminPaymentTypes = () => {
  const { t } = useTranslation('ADMIN_PAYMENT_TYPES')

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

      <List />
    </Page>
  )
}

export default AdminPaymentTypes
